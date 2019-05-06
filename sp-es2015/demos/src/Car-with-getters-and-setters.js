export class Car {

  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  get manufacturer() {
    console.log( 'Called the getter on manufacturer.' );
    return this.make;
  }

  set manufacturer(manufacturer) {
    console.log( 'Called the setter on manufacturer.' );
    this.make = manufacturer;
  }

  getMake() {
    return this.make;
  }

  setMake(make) {
    this.make = make;
  }

  getModel() {
    return this.model;
  }

  setModel(model) {
    this.model = model;
  }

  toString() {
    return `${this.make} ${this.model}`;
  }
}