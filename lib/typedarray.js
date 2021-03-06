'use strict';

// FUNCTIONS

var ABS = require( './number.js' );


// ABSOLUTE VALUE //

/**
* FUNCTION: abs( out, arr )
*	Computes an absolute value for each typed-array element.
*
* @private
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} arr - input array
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
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
