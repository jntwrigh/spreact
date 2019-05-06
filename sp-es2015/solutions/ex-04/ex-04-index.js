/*
 * Most of your work is in Movie.js and dlog.js. Go there first
 *
 * Then add several genres to the movie
 * Then print out the genres from the movie (but unwound, instead of as an array)
 */

import {dlog} from './dlog';
import {Movie} from './Movie';
import {Book} from './Book';

console.log( 'Testing books and movies' );

let grapesOfWrath = new Book( { title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '8430204840' } ),
  starWars = new Movie({title: 'Star Wars', director: 'George Lucas', writer: 'George Lucas', imdbId: 'tt0076759'});

dlog( 'Book: ' + grapesOfWrath );
dlog( 'Movie: ' + starWars );

starWars.addGenres( 'Sci Fi', 'Adventure', 'Action' );
dlog( 'Genres for Star Wars: ', ...starWars.genre );