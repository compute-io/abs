'use strict';

// FUNCTIONS //

var ABS = require( './number.js' );


// ABSOLUTE VALUE //

/**
* FUNCTION: abs( y, x )
*	Computes an element-wise absolute value.
*
* @param {Matrix} y - output matrix
* @param {Matrix} x - input matrix
* @returns {Matrix} output matrix
*/
function abs( y, x ) {
	var len = x.length,
		i;
	if ( y.length !== len ) {
		throw new Error( 'abs()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = ABS( x.data[ i ] );
	}
	return y;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
