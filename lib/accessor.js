'use strict';

// FUNCTIONS

var ABS = require( './number.js' );


// ABSOLUTE VALUE //

/**
* FUNCTION: abs( out, arr, accessor )
*	Computes an element-wise absolute value for each element of an array using an accessor.
*
* @param {Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]} output array
*/
function abs( y, x, clbk ) {
	var len = x.length,
		i;
	for ( i = 0; i < len; i++ ) {
		y[ i ] = ABS( clbk( x[ i ], i ) );
	}
	return y;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
