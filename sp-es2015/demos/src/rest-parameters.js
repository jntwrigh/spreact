function templater( str, ...args ) {
  if (args.length < 1) {
    console.error( 'Insuffient number of arguments: ', arguments );
    return;
  }

  let re = /\{\}/g,
    count = 0,
    matches;

  while ( (matches = re.exec( str )) !== null ) {
    str = str.replace( '{}', args[ count++ ] )
  }

  return str;
}

let input = 'The {} {} {} jumped over the {} {}';

console.log( 'Original: "' + input + '".' );
console.log( 'Templated: "' + templater( input, 'quick', 'brown', 'fox', 'lazy', 'dog' ) + '"' );