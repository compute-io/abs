/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Validate if a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	abs = require( './../lib' ),

	// Absolute value function:
	ABS = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-abs', function tests() {

	it( 'should export a function', function test() {
		expect( abs ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided an invalid option', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				abs( [1,2,3], {
					'accessor': value
				});
			};
		}
	});

	it( 'should throw an error if provided an array and an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				abs( [1,2,3], {
					'dtype': value
				});
			};
		}
	});

	it( 'should throw an error if provided a typed-array and an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				abs( new Int8Array([1,2,3]), {
					'dtype': value
				});
			};
		}
	});

	it( 'should throw an error if provided a matrix and an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				abs( matrix( [2,2] ), {
					'dtype': value
				});
			};
		}
	});

	it( 'should return NaN if the first argument is neither a number, array-like, or matrix-like', function test() {
		var values = [
			// '5', // valid as is array-like (length)
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isnan( abs( values[ i ] ) ) );
		}
	});

	it( 'should compute the absolute value when provided a number', function test() {
		assert.strictEqual( abs( 0 ), 0 );
		assert.strictEqual( abs( -2 ), 2 );

		assert.isTrue( isnan( abs( NaN ) ) );
	});

	it( 'should evaluate the absolute value function when provided a plain array', function test() {
		var data, actual, expected;

		data = [ -3, -2, -1, 0, 1, 2, 3 ];
		expected = [
			3,
			2,
			1,
			0,
			1,
			2,
			3
		];

		actual = abs( data );
		assert.notEqual( actual, data );

		assert.deepEqual( actual, expected );

		// Mutate...
		actual = abs( data, {
			'copy': false
		});
		assert.strictEqual( actual, data );

		assert.deepEqual( data, expected );
	});

	it( 'should evaluate the absolute value function when provided a typed array', function test() {
		var data, actual, expected;

		data = new Int8Array( [ -3, -2, -1, 0, 1, 2, 3 ] );

		expected = new Float64Array( [
			3,
			2,
			1,
			0,
			1,
			2,
			3
		]);

		actual = abs( data );
		assert.notEqual( actual, data );

		assert.deepEqual( actual, expected );

		// Mutate:
		actual = abs( data, {
			'copy': false
		});
		expected = new Int8Array( [ 3, 2, 1, 0, 1, 2, 3 ] );
		assert.strictEqual( actual, data );

		assert.deepEqual( data, expected );
	});

	it( 'should evaluate the absolute value function element-wise and return an array of a specific type', function test() {
		var data, actual, expected;

		data = [ -3, -2, -1, 0, 1, 2, 3 ];
		expected = new Int8Array( [ 3, 2, 1, 0, 1, 2, 3 ] );

		actual = abs( data, {
			'dtype': 'int8'
		});
		assert.notEqual( actual, data );
		assert.strictEqual( actual.BYTES_PER_ELEMENT, 1 );
		assert.deepEqual( actual, expected );
	});

	it( 'should evaluate the absolute value function element-wise using an accessor', function test() {
		var data, actual, expected;

		data = [
			[0,-3],
			[1,-2],
			[2,-1],
			[3,0],
			[4,1],
			[5,2],
			[6,3]
		];

		expected = [
			3,
			2,
			1,
			0,
			1,
			2,
			3
		];

		actual = abs( data, {
			'accessor': getValue
		});
		assert.notEqual( actual, data );

		assert.deepEqual( actual, expected );

		// Mutate:
		actual = abs( data, {
			'accessor': getValue,
			'copy': false
		});
		assert.strictEqual( actual, data );

		assert.deepEqual( data, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

	it( 'should evaluate the absolute value function element-wise and deep set', function test() {
		var data, actual, expected;

		data = [
			{'x':[0,-3]},
			{'x':[1,-2]},
			{'x':[2,-1]},
			{'x':[3,0]},
			{'x':[4,1]},
			{'x':[5,2]},
			{'x':[6,3]}
		];
		expected = [
			{'x':[0,3]},
			{'x':[1,2]},
			{'x':[2,1]},
			{'x':[3,0]},
			{'x':[4,1]},
			{'x':[5,2]},
			{'x':[6,3]}
		];

		actual = abs( data, {
			'path': 'x.1'
		});

		assert.strictEqual( actual, data );

		assert.deepEqual( actual, expected );

		// Specify a path with a custom separator...
		data = [
			{'x':[0,-3]},
			{'x':[1,-2]},
			{'x':[2,-1]},
			{'x':[3,0]},
			{'x':[4,1]},
			{'x':[5,2]},
			{'x':[6,3]}
		];
		actual = abs( data, {
			'path': 'x/1',
			'sep': '/'
		});
		assert.strictEqual( actual, data );

		assert.deepEqual( actual, expected );
	});

	it( 'should evaluate the absolute value function element-wise when provided a matrix', function test() {
		var mat,
			out,
			d1,
			d2,
			i;

		d1 = new Int16Array( 100 );
		d2 = new Int16Array( 100 );
		for ( i = 0; i < d1.length; i++ ) {
			d1[ i ] = i - 50;
			d2[ i ] = ABS( i - 50 );
		}
		mat = matrix( d1, [10,10], 'int16' );
		out = abs( mat, {
			'dtype': 'int16'
		});

		assert.deepEqual( out.data, d2 );

		// Mutate...
		out = abs( mat, {
			'copy': false
		});
		assert.strictEqual( mat, out );
		assert.deepEqual( mat.data, d2 );
	});

	it( 'should evaluate the absolute value function element-wise and return a matrix of a specific type', function test() {
		var mat,
			out,
			d1,
			d2,
			i;

		d1 = new Int16Array( 100 );
		d2 = new Uint16Array( 100 );
		for ( i = 0; i < d1.length; i++ ) {
			d1[ i ] = i - 50;
			d2[ i ] = ABS( i - 50 );
		}
		mat = matrix( d1, [10,10], 'int16' );
		out = abs( mat, {
			'dtype': 'uint16'
		});

		assert.strictEqual( out.dtype, 'uint16' );
		assert.deepEqual( out.data, d2 );
	});

	it( 'should return an empty data structure if provided an empty data structure', function test() {
		assert.deepEqual( abs( [] ), [] );
		assert.deepEqual( abs( matrix( [0,0] ) ).data, matrix( [0,0] ).data );
		assert.deepEqual( abs( new Int8Array() ), new Float64Array() );
	});

});
