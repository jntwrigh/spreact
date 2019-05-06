/*
 * You are adding a utility function to delete elements from an array to
 * utils.js. Start there.
 *
 * Then go to Movie.js and use it to allow for deleting a genre from the
 * genre list
 *
 * Then try out your code!
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