let words = [ 'Einstein', 'Curie', 'Rutherford', 'Planck', 'Heisenberg', 'Bohr', 'Hawking', , 'Sagan', 'Tyson' ];

let firstWord = words.pop();
console.log( 'Popped ', firstWord, ' off of ', words );

words.push( firstWord );
let whereIsHe = words.indexOf( 'Heisenberg' );

console.log( 'Found "Heisenberg" at position %d, but we have no idea of his speed.', whereIsHe );

console.log( 'Is undefined present in the list? ', words.includes( undefined ) );
console.log( 'What position is it at? ', words.indexOf( undefined ) );