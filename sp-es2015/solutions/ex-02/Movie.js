/*
 * Movie is a class which represents a movie
 * Movies have the following properties
 * title: string
 * director: string
 * writer: array of strings
 * year: number
 * genre: array of strings
 *
 * Title and year are required
 *
 * Additionally, there should be a getter and setter for "author" which should
 * get or set the director
 *
 * Add a toString() method to print it out easily.
 */

export class Movie {
  constructor( config ) {
    let required = [ 'title', 'year' ];
    let additional = [ 'director', 'writer', 'genre' ];
    for ( let x = 0; x < required.length; x++ ) {
      let propName = required[ x ];
      if ( !config[ propName ] ) {
        this[ propName ] = '[Default' + propName + ']';
      } else {
        this[ propName ] = config[ propName ];
      }
    }

    for ( let y = 0; y < additional.length; y++ ) {
      let propName = additional[ y ];
      if ( config[ propName ] ) {
        this[ propName ] = config[ propName ];
      }
    }
  }

  get author() {
    return this.director;
  }

  set author(author) {
    this.director = author;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }

}