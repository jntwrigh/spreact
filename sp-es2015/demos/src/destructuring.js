const person = {
  firstName: 'Jane',
  lastName: 'Doe'
};

const { firstName, lastName } = person;
console.log( 'Her name is %s %s', firstName, lastName );

const { firstName: givenName, lastName: surname } = person;
console.log( 'given name: %s, surname: %s', givenName, surname );

let x = 10, y = 20;
let [a, b] = [ x, y ];

console.log( 'x %d, y %d, a %d, b %d', x, y, a, b );

[ y, x ] = [ x, y ];
console.log( 'x %d, y %d, a %d, b %d', x, y, a, b );

let letters = [ 'a', 'b', 'c', 'd', 'e' ];
let [first, , third] = letters;

console.log( 'first: %s, third: %s', first, third );