/*
 * You are going to re-imagine dlog.js as a utilities file.
 *
 * Go to utils.js, follow the instructions there. Then return here:
 *
 * When you return, change your import statement to import from utils.js
 *
 */

import {dlog} from './dlog';
import {Movie} from './Movie';
import {Book} from './Book';

console.log( 'Testing books and movies' );

let grapesOfWrath = new Book( { title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '8430204840' } ),
  starWars = new Movie({title: 'Star Wars', director: 'George Lucas', writer: 'George Lucas', imdbId: 'tt0076759'});

dlog( 'Book: ' + grapesOfWrath );
dlog( 'Movie: ' + starWars );

starWars.addGenres( 'Sci Fi', 'Adventure', 'Action', 'Adventure' );
starWars.addGenres( 'Space Opera', 'Sci Fi' );
dlog( 'Genres for Star Wars: ', ...starWars.genre );