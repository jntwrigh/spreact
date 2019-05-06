// The old way:

function oldScope() {
  console.log('=============== Starting oldScope() ===============');

  // Accidentally global
  // This will throw an error because webpack exports code under 'use strict'
  // x = 1;

  // Locally scoped to this function
  var y = 2;

  // Not scoped to this block
  for ( var z = 1; z < 10; z++ ) {

    // Not scoped to the block either!
    var a = y + z;
  }

  console.log( 'oldScope(): After the loop: y: %d, z: %d, a: %d', y, z, a );

  console.log('=============== Ending oldScope() ===============');
}

function es6Let() {
  console.log('=============== Starting es6Let() ===============');

  // Replace basic declarations, this is locally scoped to this function
  let x = 1;

  for ( let y = 0; y < 10; y++ ) {
    let z = x + y;
  }

  // Try block, since this will throw an error
  try {
    console.log( 'es6Let(): x is %d', x );
    console.log( 'es6Let(): y: %d, z: %d', y, z );
  } catch ( err ) {
    console.error( 'es6Let(): Error: ', err );
  }

  console.log('=============== Starting es6Let() ===============');
}

function es6Const() {

  console.log('=============== Starting es6Const() ===============');

  // Constant variable
  const x = 5;

  // Depending on your editor and other settings, this may get early warnings
  // x ++

  const person = {
    firstName: 'John'
  };

  // Allowed
  person.firstName = 'Robert';

  // Also allowed
  person.lastName = 'Paxton';

  // Not allowed
  try {
    // person = {
    //   middleName : 'Wolfgang'
    // };
  } catch ( err ) {
    console.err( 'es6Const(): Error trying to modify constant reference: ', err );
  }

  console.log('=============== Ending es6Const() ===============');
}

oldScope();
es6Let();
es6Const();
