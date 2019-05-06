/*
 * You will be improving code in Book, Movie, and util
 *
 * In each file, replace use of the for loop with the appropriate use of
 * an array processing function (forEach, some, every, map, filter)
 *
 * Re-run your code here. Though nothing has changed in this file, the
 * underlying code has, of course, changed. Everything should still work, though.
 *
 */

import {dlog} from './utils';
import {Movie} from './Movie';
import {Book} from './Book';

console.log( 'Testing books and movies' );

let grapesOfWrath = new Book( { title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '8430204840' } ),
  starWars = new Movie({title: 'Star Wars', director: 'George Lucas', writer: 'George Lucas', imdbId: 'tt0076759'});

dlog( 'Book: ' + grapesOfWrath );
dlog( 'Movie: ' + starWars );

starWars.addGenres( 'Sci Fi', 'Adventure', 'Action', 'Adventure' );
starWars.addGenres( 'Space Opera', 'Sci Fi' );
starWars.removeGenre( 'Space Opera' );
dlog( 'Genres for Star Wars: ', ...starWars.genre );