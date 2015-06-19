'use strict';

/**
* FUNCTION: abs( x )
*	Computes the absolute value of an input value.
*
* @param {Number} x - input value
* @returns {Number} absolute value
*/
function abs( x ) {
	if ( x < 0 ) {
		return -x;
	} else if ( x === 0 ) {
		// Handle -0...
		return 0;
	} else {
		return x;
	}
} // end FUNCTION abs


// EXPORTS //

module.exports = abs;
