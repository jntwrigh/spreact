let odds = [ 1, 3, 5, 7, 9 ];
let evens = [2, 4, 6, 8];

let all = [ ...odds, ...evens ];

console.log( 'All numbers: ', all );

function takesAnArray() {
  console.log( 'takesAnArray() count: ', arguments.length );
}

takesAnArray( evens );
takesAnArray( ...evens );