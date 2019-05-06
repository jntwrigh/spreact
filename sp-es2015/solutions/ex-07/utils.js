/*
 * Replace the for loop in dlog() with an appropriate array processor
 *
 * Simplify uniq() and arrayDelete() by using array processors
 *
 */
let dlog = ( ...msgs ) => {
  let output = document.getElementById( 'output' );
  if ( !output ) {
    output = document.createElement( 'div' );
    output.setAttribute( 'id', 'output' );
    document.addEventListener( 'DOMContentLoaded', function() {
      document.body.appendChild( output );
    } )
  }

  let tmp = '';
  msgs.forEach( msg => tmp += msg + '<br/>' );
  output.innerHTML += tmp;
};

let uniq = ( input ) => {
  return input.filter( ( item, idx ) => {
    return !input.includes( item, idx + 1 );
  } )
};

let arrayDelete = ( list, toDelete ) => {
  return list.filter( item => item !== toDelete )
};

export {dlog, uniq, arrayDelete};
