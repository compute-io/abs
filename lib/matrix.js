'use strict';

// ABSOLUTE VALUE //

/**
* FUNCTION: abs( y, x )
*	Computes an element-wise absolute value for each matrix element.
*
* @private
* @param {Matrix} y - output matrix
* @param {Matrix} x - input matrix
* @returns {Matrix} output matrix
*/
function abs( y, x ) {
	var out = y,
		len,
		i,
		val;

	x = x.data;
	y = y.data;
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		if ( val < 0 ) {
			y[ i ] = -val;
		} else if ( val === 0 ) {
			// Return correctly -0.
			y[ i ] = 0;
		}  else {
			y[ i ] = val;
		}
	}
	return out;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
