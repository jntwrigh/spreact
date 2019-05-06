/*
 * Book represents a book. It should have these properties
 * author: string
 * title: string
 * isbn: string
 * edition: number
 * pageCount: number
 *
 * Author, title, and isbn are required
 *
 * Add a toString() method to print it out easily.
 */

export class Book {
  constructor( config ) {
    let required = [ 'author', 'title', 'isbn' ];
    let additional = [ 'edition', 'pageCount' ];
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

  toString() {
    return `${this.title} by ${this.author}`;
  }

}