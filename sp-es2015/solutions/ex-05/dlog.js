let output = document.getElementById( 'output' );
if (! output) {
  output = document.createElement('div');
  output.setAttribute( 'id', 'output' );
  document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild( output );
  })
}

function dlog(...msg) {
  let tmp = '';
  for (let x = 0; x < msg.length; x++) {
    tmp += msg[x] + '<br/>';
  }
  output.innerHTML += tmp;
}

export {dlog};
