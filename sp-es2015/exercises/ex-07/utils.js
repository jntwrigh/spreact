/*
 * Replace the for loop in dlog() with an appropriate array processor
 *
 * Simplify uniq() and arrayDelete() by using array processors
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
