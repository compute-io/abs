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
		var data, expected, i;

		data = [
			{'x':-3},
			{'x':-2},
			{'x':-1},
			{'x':0},
			{'x':1},
			{'x':2},
			{'x':3}
		];

		data = abs( data, 'x' );

		expected = [
			{'x':3},
			{'x':2},
			{'x':1},
			{'x':0},
			{'x':1},
			{'x':2},
			{'x':3}
		];

		for ( i = 0; i < data.length; i++ ) {
			assert.strictEqual( data[ i ].x, expected[ i ].x );
		}

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

		for ( i = 0; i < data.length; i++ ) {
			assert.strictEqual( data[ i ].x[ 1 ], expected[ i ].x[ 1 ], 'custom separator' );
		}

	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( abs( [], 'x' ) );
		assert.isNull( abs( [], 'x', '/' ) );
	});

});
