/* global describe, it, require, beforeEach */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	abs = require( './../lib/matrix.js' ),

	// Absolute value function:
	ABS = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'matrix abs', function tests() {

	var expected,
		mat,
		d1,
		d2,
		i;

	d1 = new Int16Array( 100 );
	d2 = new Int16Array( 100 );
	for ( i = 0; i < d1.length; i++ ) {
		d1[ i ] = i - 50;
		d2[ i ] = ABS( i - 50 );
	}

	beforeEach( function before() {
		mat = matrix( d1, [10,10], 'int16' );
		expected = matrix( d2, [10,10], 'int16' );
	});

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided unequal length matrices', function test() {
		expect( badValues ).to.throw( Error );
		function badValues() {
			abs( matrix( [5, 5] ), mat );
		}
	});

	it( 'should evaluate the absolute value function for each matrix element', function test() {
		var actual;

		actual = matrix( [10,10], 'int16' );
		actual = abs( actual, mat );

		assert.deepEqual( actual.data, expected.data );
	});

	it( 'should return an empty matrix if provided an empty matrix', function test() {
		var out, mat, expected;

		out = matrix( [0,0] );
		expected = matrix( [0,0] ).data;

		mat = matrix( [0,10] );
		assert.deepEqual( abs( out, mat ).data, expected );

		mat = matrix( [10,0] );
		assert.deepEqual( abs( out, mat ).data, expected );

		mat = matrix( [0,0] );
		assert.deepEqual( abs( out, mat ).data, expected );
	});

});
