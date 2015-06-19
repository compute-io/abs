'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	ABS = require( './number.js' );


// ABSOLUTE VALUE //

/**
* FUNCTION: abs( arr, path[, sep] )
*	Computes an element-wise absolute value for each element and deep sets the input array.
*
* @param {Array} arr - input array
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array|Null} input array or null
*/
function abs( x, path, sep ) {
	var len = x.length,
		opts = {},
		dget,
		dset,
		i;

	if ( !len ) {
		return null;
	}
	if ( arguments.length > 2 ) {
		opts.sep = sep;
	}
	dget = deepGet( path, opts );
	dset = deepSet( path, opts );
	for ( i = 0; i < len; i++ ) {
		dset( x[i], ABS( dget( x[i] ) ) );
	}
	return x;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
