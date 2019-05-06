/*
 * In this exercise, you will build two classes: Book, and Movie
 * The files (Book.js and Movie.js) have already been created for you in this
 * folder. Edit each one in turn and then return here.
 *
 * Now that you have Book.js and Movie.js, import them here, then create several
 * instances of Books and Movies to test them out
 *
 */


import {dlog} from './dlog';
import {Movie} from './Movie';
import {Book} from './Book';

console.log( 'Testing books and movies' );

let grapesOfWrath = new Book( { title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '8430204840' } ),
  starWars = new Movie({title: 'Star Wars', director: 'George Lucas', writer: 'George Lucas'});

dlog( 'Book: ' + grapesOfWrath );
dlog( 'Movie: ' + starWars );
