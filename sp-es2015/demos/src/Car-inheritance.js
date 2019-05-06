import { Vehicle } from './Vehicle-inheritance';

export class Car extends Vehicle {

  constructor( make, model, year, color ) {
    console.log( 'Car.constructor()' );
    super(make, model);
    this.year = year;
    this.color = color;
  }

  toString() {
    let parent = super.toString();
    return `${this.year} ${parent} (${this.color})`;
  }

}