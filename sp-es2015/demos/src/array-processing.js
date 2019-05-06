let words = [ 'Einstein', 'Curie', 'Rutherford', 'Planck', 'Heisenberg', 'Bohr', 'Hawking', null, 'Sagan', 'Tyson' ];

// Print each word
words.forEach( ( word, index ) => {
  console.log( '%s occurs at position %d', word, index );
} );

// Make sure there are no non-true elements
let result = words.every( ( word ) => word );

if ( result ) {
  console.log( 'No false elements!' )
} else {
  console.log( 'Found at least one false element.' );
}

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

let currencies = numbers.map((number) => {
  return '$' + number.toString() + '.00';
});

console.log( 'Formatted as currency', currencies );

let odds = numbers.filter( ( number ) => number % 2 );

console.log( 'Odd numbers: ', odds );

let addEmUp = numbers.reduce( ( previous, current ) => previous + current, 0 );
console.log( 'Sum of all numbers: ', addEmUp );