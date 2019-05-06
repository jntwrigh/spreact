/*
 * Book and Movie should have a common ancestor.
 * Create a class, Media, in Media.js.
 * Then go to Book.js and Movie.js and update them accordingly.
 *
 * Here, you should update Movie.js so that the movie includes an imdbId.
 *
 * Go to http://localhost:8000/exercises to see your code in action.
 */

import {dlog} from './dlog';
import {Movie} from './Movie';
import {Book} from './Book';

console.log( 'Testing books and movies' );

let grapesOfWrath = new Book( { title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '8430204840' } ),
  starWars = new Movie({title: 'Star Wars', director: 'George Lucas', writer: 'George Lucas', imdbId: 'tt0076759'});

dlog( 'Book: ' + grapesOfWrath );
dlog( 'Movie: ' + starWars );