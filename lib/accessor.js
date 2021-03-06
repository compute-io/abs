'use strict';

// FUNCTIONS

var ABS = require( './number.js' );


// ABSOLUTE VALUE //

/**
* FUNCTION: abs( out, arr, accessor )
*	Computes an element-wise absolute value using an accessor.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function abs( y, x, clbk ) {
	var len = x.length,
		v, i;
	for ( i = 0; i < len; i++ ) {
		v = clbk( x[ i ], i );
		if ( typeof v === 'number' ) {
			y[ i ] = ABS( v );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION abs()


// EXPORTS //

module.exports = abs;
