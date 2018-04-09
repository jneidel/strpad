const test = require( "ava" );
const strpad = require( "." );

test( "left pad", t => t.is( strpad.left( "123", 5 ), "  123" ) );

test( "right pad", t => t.is( strpad.right( "123", 5 ), "123  " ) );

test( "center pad", t => t.is( strpad.center( "123", 5 ), " 123 " ) );

