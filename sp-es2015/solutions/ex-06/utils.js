/*
 * Add a utility method to delete an element from an array
 * arrayDelete(array, element)
 * array is the array to operate on
 * element is the element to delete
 * It should return array without element
 *
 * Write it using the arrow function notation
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

let arrayDelete = (list, item) => {
  let pos = -1;
  for (let x= 0; x < list.length; x++) {
    if (list[x] === item) {
      pos = x;
      break;
    }
  }

  list.splice( pos, 1 );
  return list;
}

export {dlog, uniq, arrayDelete};
