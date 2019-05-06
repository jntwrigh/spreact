import {Media} from './Media';
import {uniq, arrayDelete} from './utils';

export class Movie extends Media {
  constructor( config ) {
    super( config );
    let required = [ 'title', 'year', 'imdbId' ];
    let additional = [ 'director', 'writer', 'genre' ];

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

  removeGenre( genre ) {
    this.genre = arrayDelete( this.genre, genre );
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