/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	abs = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should evaluate the absolute value function', function test() {
		var data, actual, expected;

		data = new Float64Array( [ -5, 2, -4, 1, -2, -0 ] );
		actual = new Float64Array( data.length );

		actual = abs( actual, data );
		expected = new Float64Array( [ 5, 2, 4, 1, 2, 0 ] );

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( abs( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
