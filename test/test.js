'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

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

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
				5,
				'5',
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

	it( 'should compute an element-wise absolute value', function test() {
		var data, expected;

		data = [ -5, 2, -4, 1, -2, 0 ];
		expected = [ 5, 2, 4, 1, 2, 0 ];

		abs( data );
		assert.deepEqual( data, expected );
	});

});
