# strpad

> Combine left, right and center pad modules in lack of a working alternative

[![Travis Build Status](https://img.shields.io/travis/jneidel/strpad.svg?style=flat-square)](https://travis-ci.org/jneidel/strpad)
[![Licence GPLv3](https://img.shields.io/badge/licence-GPLv3-green.svg?style=flat-square)](https://github.com/jneidel/strpad/blob/master/licence)
[![Npm Downloads](https://img.shields.io/npm/dw/strpad.svg?style=flat-square)](https://www.npmjs.com/package/strpad)

See [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) (left) and [String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) (right) for builtin functions.

## Install

[![Npm Version](https://img.shields.io/npm/v/strpad.svg?style=flat-square)](https://www.npmjs.com/package/strpad)

```
$ npm install strpad
```

## Usage

```js
const strpad = require( "strpad" );

strpad.left( "foo", 5 );
//=> "  foo"

strpad.right( "foo", 5 );
//=> "foo  "

strpad.center( "foo", 5 );
//=> " foo "

/* With filler: */

strpad.left( "bar", 5, "-" );
//=> "--bar"

strpad.right( "bar", 5, "-" );
//=> "bar--"

strpad.center( "bar", 5, "-" );
//=> "-bar-"
```

## API

### strpad.left( str, padding, [filler] )

```js
strpad.left( "foo", 5 );
//=> "  foo"

strpad.left( "bar", 5, "-" );
//=> "--bar"
```

See bultin function: [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart).

### strpad.right( str, padding, [filler] )

```js
strpad.right( "foo", 5 );
//=> "foo  "

strpad.right( "bar", 5, "-" );
//=> "bar--"
```

See builtin function: [String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd).

### strpad.center( str, padding, [filler] )

```js
strpad.center( "foo", 5 );
//=> " foo "

strpad.center( "bar", 5, "-" );
//=> "-bar-"
```

See original module: [@fav/text.pad](https://github.com/sttk/fav-text.pad).

## Test

```
$ npm run test
```

## License

GPLv3 © [Jonathan Neidel](http://jneidel.com)

