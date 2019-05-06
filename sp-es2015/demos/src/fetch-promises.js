import '../../node_modules/whatwg-fetch';

let jsonPromise = fetch( '/data/people.json' )
  .then( ( response ) => {
    return response.json();
  } );

jsonPromise.then( ( people ) => {
  let retVal = false,
    searchName = 'John';
  people.forEach( ( person ) => {
    console.log( person.name );
    if ( person.name === searchName ) {
      retVal = person;
    }
  } );

  return retVal ? retVal : Promise.reject( `"${searchName}" could not be found.` );
} )
  .then( ( person ) => {
    console.log( 'Found person: ', person );
  } )
  .catch( ( error ) => {
    console.error( 'Could not find the person we were looking for.' );
  } );

let badJsonPromise = fetch( '/data/bad-people.json' )
  .then( ( response ) => {
    return response.json();
  } );

badJsonPromise.then( ( people ) => {
  console.log( 'This will never run.' )
}, ( error ) => {
  // Could also use error.message, error.stack
  console.error( 'Failed to parse JSON: ', error );
} );

let oneMoreBadPromise = fetch( '/data/bad-people.json' )
  .then( ( response ) => {
    return response.json();
  } );

oneMoreBadPromise.then( ( response ) => {
  console.log( 'First-order promise' )
} )
  .then( ( response ) => {
    console.log( 'Second-order promise' )
  } )
  .then( ( response ) => {
    console.log( 'Third-order promise' )
  } )
  .catch( ( error ) => {
    console.error( 'This is here just in case something went wrong.', error );
  } );