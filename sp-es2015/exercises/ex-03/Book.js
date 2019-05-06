/*
 * Book should be a subclass of Media
 * Map isbn onto mediaId, adding a getter and setter as appropriate
 *
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