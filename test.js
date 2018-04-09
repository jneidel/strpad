const test = require( "ava" );
const strpad = require( "." );

// strpad.left
test( "left pad", t => t.is( strpad.left( "foo", 5 ), "  foo" ) );
test( "left pad with filler", t => t.is( strpad.left( "bar", 5, "-" ), "--bar" ) );

// strpad.right
test( "right pad", t => t.is( strpad.right( "foo", 5 ), "foo  " ) );
test( "right pad with filler", t => t.is( strpad.right( "bar", 5, "-" ), "bar--" ) );

// strpad.center
test( "center pad", t => t.is( strpad.center( "foo", 5 ), " foo " ) );
test( "center pad with filler", t => t.is( strpad.center( "bar", 5, "-" ), "-bar-" ) );

