import '../../node_modules/whatwg-fetch';

fetch( '/data/test.txt' )
  .then( ( response ) => {
    if ( response.ok || response.redirected ) {
      console.log( response );
      console.log( 'Status: ', response.status );
      console.log( 'Status text: ', response.statusText );
      response.text().then( ( text ) => console.log( text ) );
    }
  } );

// 404, but not a fetch error!
fetch( '/data/error.txt' )
  .then( ( response ) => {
    if ( response.status >= 400 ) {
      console.error( 'Something went wrong!' );
      console.log( 'Status: ', response.status );
      console.log( 'Status text: ', response.statusText );
      console.log( 'Content-length:', response.headers.get('Content-Length') );
    }
  } );