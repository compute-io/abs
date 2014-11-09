Absolute Value
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes an element-wise absolute value for each element in a numeric array.


## Installation

``` bash
$ npm install compute-abs
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var abs = require( 'compute-abs' );
```

#### abs( arr )

Computes an element-wise absolute value for each element in a numeric `array`.

``` javascript
var data = [ -1, 2, -3 ];

abs( data );
// returns [ 1, 2, 3 ]
```


## Examples

``` javascript
var abs = require( 'compute-abs' );

// Simulate some data...
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 ) - 50;
}

abs( data );

console.log( data.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

This function mutates the input `array`. If mutation is undesired,

``` javascript
var data = [ -1, 2, -3, 4 ],
	copy = data.slice();

abs( copy );
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-abs.svg
[npm-url]: https://npmjs.org/package/compute-abs

[travis-image]: http://img.shields.io/travis/compute-io/abs/master.svg
[travis-url]: https://travis-ci.org/compute-io/abs

[coveralls-image]: https://img.shields.io/coveralls/compute-io/abs/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/abs?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/abs.svg
[dependencies-url]: https://david-dm.org/compute-io/abs

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/abs.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/abs

[github-issues-image]: http://img.shields.io/github/issues/compute-io/abs.svg
[github-issues-url]: https://github.com/compute-io/abs/issues
