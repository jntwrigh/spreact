/*
 * Replace the two for loops in the constructor() with calls to forEach()
 *
 * Also, update removeGenre() to set this.genre = the results of arrayDelete
 */
import {Media} from './Media';
import {uniq} from './utils';

export class Movie extends Media {
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

  addGenres( ...genres ) {
    if ( this.genre && this.genre.length ) {
      this.genre = uniq( [ ...this.genre, ...genres ] );
    } else {
      this.genre = uniq( [ ...genres ] );
    }
  }

  addWriters( ...writers ) {
    this.writer = [ this.writer, ...writers ];
  }

  get author() {
    return this.director;
  }

  set author( author ) {
    this.director = author;
  }

  get imdbId() {
    return this.mediaId;
  }

  set imdbId( imdbId ) {
    this.mediaId = imdbId;
  }

  toString() {
    return `${this.title} by ${this.author} (IMDB id: ${this.mediaId})`;
  }

}