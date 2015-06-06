'use strict';

// MODULES //

var isArrayLike = require( 'validate.io-array-like' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	matrix = require( 'dstructs-matrix' ),
	validate = require( './validate.js' );

// FUNCTIONS //

var abs1 = require( './array.js' ),
	abs2 = require( './accessor.js' ),
	abs3 = require( './matrix.js' );

// ABSOLUTE VALUE //

/**
* FUNCTION: abs( x[, opts] )
*	Computes an element-wise absolute value.
*
* @param {Number|Number[]|Array} x - input value
* @param {Object} [opts] - function options
* @param {Boolean} [opts.copy=true] - boolean indicating if the function should return a new array
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @returns {Number|Number[]|Null} output array or null
*/
function abs( x, options ) {

	var opts = {},
		err,
		out,
		copy;

	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}

	copy = (opts.copy === undefined) ? true : false;

	if ( isMatrixLike( x ) ) {
		if ( copy === false ) {
			out = x;
		}
		else {
			out = matrix( x.shape, x.dtype );
		}
		out = abs3( out, x );
		return out;
	}

	if ( isArrayLike( x ) ) {
		if ( !x.length ) {
			return null;
		}
		if ( copy ) {
			out = new Array( x.length );
		}
		else {
			out = x;
		}
 		if ( opts.accessor ) {
			out = abs2( out, x, opts.accessor );
		}
		else {
			out = abs1( out, x );
		}
		return out;
	}

	throw new TypeError( 'abs()::invalid input argument. Input value type not currently supported. Value: `' + x + '`.' );

} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
