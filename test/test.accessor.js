/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	abs = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should compute the absolute value using an accessor', function test() {
		var data, actual, expected;

		data = [
			{'x':-3},
			{'x':-2},
			{'x':-1},
			{'x':0},
			{'x':1},
			{'x':2},
			{'x':3}
		];
		actual = new Array( data.length );
		actual = abs( actual, data, getValue );

		expected = [
			3,
			2,
			1,
			0,
			1,
			2,
			3,
		];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}

	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( abs( [], [], getValue ) );
		function getValue( d ) {
			return d.x;
		}
	});

});
