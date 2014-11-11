/**
*
*	COMPUTE: abs
*
*
*	DESCRIPTION:
*		- Computes an element-wise absolute value for each element in a numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// ABSOLUTE VALUE //

/**
* FUNCTION: abs( arr )
*	Computes an element-wise absolute value for each element of a numeric array. Note: the input array is mutated.
*
* @param {Array} arr - numeric array
*/
function abs( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'abs()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		val;
	for ( var i = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( val < 0 ) {
			arr[ i ] = -val;
		} else if ( val === 0 ) {
			// Return correctly -0.
			arr[ i ] = 0;
		}
	}
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
