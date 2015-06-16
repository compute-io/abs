/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	abs = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should evaluate the absolute value function', function test() {
		assert.equal( abs( -9 ), 9 );
		assert.equal( abs( 9 ), 9 );
		assert.equal( abs( -0 ), 0 );
		assert.equal( abs( 0 ), 0 );
	});

	it( 'should return a numeric value if provided a numeric value', function test() {
		assert.isNumber( abs( 1 ) );
	});

});
