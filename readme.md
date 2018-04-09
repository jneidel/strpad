# strpad

> Combine left right and center pad modules in lack of a working alternative

[![Travis Build Status](https://img.shields.io/travis/jneidel/strpad.svg?style=flat-square)](https://travis-ci.org/jneidel/strpad)
[![Licence MIT](https://img.shields.io/badge/licence-MIT-green.svg?style=flat-square)](https://github.com/jneidel/strpad/blob/master/licence)
[![Npm Downloads](https://img.shields.io/npm/dw/strpad.svg?style=flat-square)](https://www.npmjs.com/package/strpad)

## Install

[![Npm Version](https://img.shields.io/npm/v/strpad.svg?style=flat-square)](https://www.npmjs.com/package/strpad)

```
$ npm install strpad
```

## Usage

```js
const strpad = require( "strpad" );

strpad.left( "123", 5 );
//=> "  123"

strpad.right( "123", 5 );
//=> "123  "

strpad.center( "123", 5 );
//=> " 123 "
```

## API

### strpad.left( str, padding )

```js
strpad.left( "123", 5 );
//=> "  123"
```

See original module [left-pad](https://github.com/stevemao/left-pad).

### strpad.right( str, padding )

```js
strpad.right( "123", 5 );
//=> "123  "
```

See original module [right-pad](https://github.com/MatthewNPM/right-pad).

### strpad.center( str, padding )

```js
strpad.center( "123", 5 );
//=> " 123 "
```

See original module [@fav/text.pad](https://github.com/sttk/fav-text.pad).

## Test

```
$ npm run test
```

## License

MIT © [Jonathan Neidel](http://jneidel.com)

Excludes the original modules.
