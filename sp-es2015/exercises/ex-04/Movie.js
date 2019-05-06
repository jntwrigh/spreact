/*
 * Add two methods to Movie:
 * addGenres(): Takes one or more genres, add them on to the genre array
 * addWriters(): Takes one or more writers, add them on to the writer array
 */

import {Media} from './Media';
export class Movie extends Media{
  constructor( config ) {
    super( config );
    let required = [ 'title', 'year', 'imdbId' ];
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

  get imdbId() {
    return this.mediaId;
  }

  set imdbId(imdbId) {
    this.mediaId = imdbId;
  }

  toString() {
    return `${this.title} by ${this.author} (IMDB id: ${this.mediaId})`;
  }

}