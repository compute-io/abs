'use strict';

/**
* FUNCTION: abs( x )
*	Evaluates the absolute value function for an input value.
*
* @param {Number} x - input value
* @returns {Number} evaluated absolute value function
*/
function abs( x ) {
	if ( x < 0 ) {
		return -x;
	} else if ( x === 0 ) {
		// Return correctly -0.
		return 0;
	} else {
		return x;
	}
}

module.exports = abs;
