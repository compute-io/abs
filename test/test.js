'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	abs = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided an input which is not array-like or matrix-like', function test() {
		var values = [
				5,
				// '5',
				{},
				true,
				null,
				undefined,
				NaN,
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				abs( value );
			};
		}
	});

	it( 'should throw an error if `options` is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				abs( [1,2,3,4,5], value );
			};
		}
	});


	it( 'should compute an element-wise absolute value for an array', function test() {
		var data, expected, result;

		data = [ -5, 2, -4, 1, -2, -0 ];
		expected = [ 5, 2, 4, 1, 2, 0 ];

		result = abs( data );
		assert.deepEqual( result, expected );
	});

	it( 'should compute an element-wise absolute value for an array and mutate it', function test() {
		var data, expected, result;

		data = [ -5, 2, -4, 1, -2, -0 ];
		expected = [ 5, 2, 4, 1, 2, 0 ];

		result = abs( data, {
			'copy': false
		});

		assert.ok( result === data );

		assert.deepEqual( result, expected );
	});

	it( 'should compute an element-wise absolute value for an array using an accessor', function test() {
		var data, expected, result;

		data = [
			{'x': -5},
			{'x':  2},
			{'x': -4},
			{'x':  1},
			{'x': -2},
			{'x': -0} ];

		expected = [ 5, 2, 4, 1, 2, 0 ];

		result = abs( data, {
			'accessor': getValue
		});
		assert.deepEqual( result, expected );

		function getValue( d ) {
			return d.x;
		}

	});

	it( 'should compute an element-wise absolute value for a matrix', function test() {
		var data, expected, results;

		data = matrix( new Int32Array( [ 2, -4, 5, -3, 8, 0, -7, 2, 1 ] ), [3,3] );
		expected = '2,4,5;3,8,0;7,2,1';

		results = abs( data );

		assert.strictEqual( results.toString(), expected );
	});

	it( 'should compute an element-wise absolute value for a matrix and mutate the input', function test() {
		var data, expected, results;

		data = matrix( new Int32Array( [ 2, -4, 5, -3, 8, 0, -7, 2, 1 ] ), [3,3] );
		expected = '2,4,5;3,8,0;7,2,1';

		results = abs( data, {'copy': false} );

		assert.strictEqual( results.toString(), expected);

		assert.ok( results.data === data.data );
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( abs( [] ) );
	});

});
