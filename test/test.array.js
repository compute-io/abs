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
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( abs( [], [] ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [ true, null, [], {} ];
		actual = new Array( data.length );
		actual = abs( actual, data );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );
	});

});
