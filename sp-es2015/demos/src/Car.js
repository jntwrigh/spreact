export class Car {

  constructor(make, model) {
    this.make = make;
    this.model = model;
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