/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	abs = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should evaluate the absolute value function', function test() {
		var data, actual, expected;

		data = [ -5, 2, -4, 1, -2, -0 ];
		expected = [ 5, 2, 4, 1, 2, 0 ];

		actual = new Array( data.length );

		actual = abs( actual, data );

		assert.deepEqual( actual, expected );

		// Typed arrays...
		data = new Float64Array( data );
		actual = new Float64Array( data.length );

		actual = abs( actual, data );
		expected = new Float64Array( expected );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( abs( [], [] ), [] );
		assert.deepEqual( abs( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [ -3, null, -2 ];
		actual = new Array( data.length );
		actual = abs( actual, data );

		expected = [ 3, NaN, 2 ];

		assert.deepEqual( actual, expected );
	});

});
