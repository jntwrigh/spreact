/*
 * Add a method removeGenre(genre) which allows users to remove a genre from
 * the genre list. removeGenre should use utils.arrayDelete behind the scenes.
 *
 * Also, ensure that the genre list is always sorted alphabetically
 */

import {Media} from './Media';
import {uniq, arrayDelete} from './utils';

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

  removeGenre( genre ) {
    arrayDelete( this.genre, genre );
  }

  addGenres( ...genres ) {
    if ( this.genre && this.genre.length ) {
      this.genre = uniq( [ ...this.genre, ...genres ] );
    } else {
      this.genre = uniq( [ ...genres ] );
    }

    this.genre.sort();
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