/*
 * Rewrite dlog as a utility function, including:
 * - Change it to an arrow function
 * - Move the code that had relied on a closure into the function itself
 *
 * Then add a function, uniq, which should take an array as input
 * and return the unique elements of that array
 * Make sure that you write it as an arrow function.
 * Go back to Movie.js to ensure that there are only
 * unique genres in the genre collection
 *
 * Export dlog and uniq
 *
 */
let dlog = (...msg) => {
  let output = document.getElementById( 'output' );
  if (! output) {
    output = document.createElement('div');
    output.setAttribute( 'id', 'output' );
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild( output );
    })
  }

  let tmp = '';
  for (let x = 0; x < msg.length; x++) {
    tmp += msg[x] + '<br/>';
  }
  output.innerHTML += tmp;
};

let uniq = (input) => {
  let tmp = {};
  for (let x = 0; x < input.length; x++) {
    tmp[input[x]] = 1;
  }
  return Object.keys( tmp );
};


export {dlog, uniq};
