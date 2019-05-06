// Assign an arrow function to a reference
let foo = () => {
  console.log( 'Called foo()' );
};

foo();

let doubler = x => x * x;

console.log( 'doubler(5): ', doubler( 5 ) );

let adder = (x, y) => x + y;

console.log( 'adder(10, 20): ', adder( 10, 20 ) );

let doubleThenAdd = (x, y) => {
  x = doubler( x );
  y = doubler( y );
  return adder( x, y );
};

console.log( 'doubleThenAdd(10, 20): ', doubleThenAdd( 10, 20 ) );

let nouns = [ 'cat', 'dog', 'idea', 'house', 'woman', 'man' ];
let capitalizedNouns = nouns.map((noun) => {
  return noun[ 0 ].toUpperCase() + noun.slice( 1 );
});

console.log( 'nouns: ', nouns );
console.log( 'capitalizedNouns: ', capitalizedNouns );
