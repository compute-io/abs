/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	abs = require( './../lib/deepset.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'deepset abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should compute the absolute value function and deep set', function test() {
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

		actual = abs( data, 'x' );

		expected = [
			{'x':3},
			{'x':2},
			{'x':1},
			{'x':0},
			{'x':1},
			{'x':2},
			{'x':3}
		];

		assert.strictEqual( data, actual );
		assert.deepEqual( data, expected);

		// Custom separator...
		data = [
			{'x':[9,-3]},
			{'x':[9,-2]},
			{'x':[9,-1]},
			{'x':[9,0]},
			{'x':[9,1]},
			{'x':[9,2]},
			{'x':[9,3]}
		];

		data = abs( data, 'x/1', '/' );
		expected = [
			{'x':[9,3]},
			{'x':[9,2]},
			{'x':[9,1]},
			{'x':[9,0]},
			{'x':[9,1]},
			{'x':[9,2]},
			{'x':[9,3]}
		];

		assert.deepEqual( data, expected, 'custom separator' );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		var arr = [];
		assert.deepEqual( abs( arr, 'x' ), [] );
		assert.deepEqual( abs( arr, 'x', '/' ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':[9,-3]},
			{'x':[9,-2]},
			{'x':[9,-1]},
			{'x':[9,null]},
			{'x':[9,1]},
			{'x':[9,true]},
			{'x':[9,3]}
		];
		actual = abs( data, 'x.1' );

		expected = [
			{'x':[9,3]},
			{'x':[9,2]},
			{'x':[9,1]},
			{'x':[9,NaN]},
			{'x':[9,1]},
			{'x':[9,NaN]},
			{'x':[9,3]}
		];

		assert.deepEqual( data, expected );
	});

});
