// demo-numbers

import {movies} from './movies';

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

numbers.forEach( ( number ) => console.log( 'Number is %d', number ) );
console.log( 'There are %d movies.', movies.length );