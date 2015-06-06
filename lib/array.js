'use strict';

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
		i,
		val;

	for ( i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( val < 0 ) {
			out[ i ] = -val;
		} else if ( val === 0 ) {
			// Return correctly -0.
			out[ i ] = 0;
		} else {
			out[ i ] = val;
		}
	}
	return out;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
