/*
 * Modify dlog so that it can take a variable number of arguments.
 *
 */

let output = document.getElementById( 'output' );
if (! output) {
  output = document.createElement('div');
  output.setAttribute( 'id', 'output' );
  document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild( output );
  })
}

function dlog(...msg) {
  output.innerHTML += msg + '<br/>';
}

export {dlog};
