var Car = function(make, model) { this.make = make; this.model = model };

var myHonda = new Car('Honda', 'Civic')
Car.prototype.getMake = function() { return this.make }

myHonda.getMake();

class Car2 {
  constructor(make, model) { this.make = make; this.model = model }
  getMake() { return this.make }
}
let myFord = new Car2('Ford', 'Mustang')

myFord.getMake()
