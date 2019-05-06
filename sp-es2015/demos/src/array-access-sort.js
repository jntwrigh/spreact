let words = [ 'dog', 'cat', 'door', 'house', 'woman', 'man' ];
let duplicateWords = [ ...words ];
let threeWords = words.slice( 0, 3 );

console.log( 'threeWords: ', threeWords );

// Delete a word
let deletedWords = duplicateWords.splice( 1, 1 );
console.log( 'Deleted ', deletedWords, ' from ', duplicateWords );

duplicateWords = [ ...words ];
duplicateWords.sort().reverse();

console.log( 'duplicateWords Z - A: ', duplicateWords );

duplicateWords.sort( ( a, b ) => {
  if ( a.length > b.length ) {
    return 1;
  } else if ( b.length > a.length ) {
    return -1
  } else {
    return 0;
  }
} );

console.log( 'duplicateWords by length (increasing): ', duplicateWords );