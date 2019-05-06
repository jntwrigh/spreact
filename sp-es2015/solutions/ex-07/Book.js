/*
 * Replace the two for loops in the constructor() with calls to forEach()
 */
import {Media} from './Media';
export class Book extends Media {
  constructor( config ) {
    super( config );
    let required = [ 'author', 'title', 'isbn' ];
    let additional = [ 'edition', 'pageCount' ];

    required.forEach( propName => {
      if ( !config[ propName ] ) {
        this[ propName ] = '[Default' + propName + ']';
      } else {
        this[ propName ] = config[ propName ];
      }
    } );

    additional.forEach( propName => {
      if ( config[ propName ] ) {
        this[ propName ] = config[ propName ];
      }
    } );

  }

  get isbn() {
    return this.mediaId;
  }

  set isbn( isbn ) {
    this.mediaId = isbn;
  }

  toString() {
    return `${this.title} by ${this.author} (ISBN: ${this.mediaId})`;
  }

}