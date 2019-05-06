/*
 * https://openlibrary.org/api/books?bibkeys=OLID:OL20791126M&format=json&jscmd=data
 * http://www.omdbapi.com/?t=goodfellas
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