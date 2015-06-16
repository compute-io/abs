'use strict';

// FUNCTIONS

var ABS = require( './number.js' );

// ABSOLUTE VALUE //

/**
* FUNCTION: abs( out, arr )
*	Computes an element-wise absolute value for each element of an array.
*
* @private
* @param {Array} out - output array
* @param {Array} arr - input array
* @returns {Array} output array
*/
function abs( out, arr ) {
	var len = arr.length,
		i;

	for ( i = 0; i < len; i++ ) {
		out[ i ] = ABS( arr[ i ] );
	}
	return out;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
