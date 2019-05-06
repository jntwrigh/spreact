import { Car } from './Car-inheritance';

var honda = new Car('Honda', 'Civic', '2002', 'red');
console.log( 'Old car: ' + honda );

var bmw = new Car(null, 'M3');
bmw.manufacturer = 'BMW';

console.log( 'New car: ' + bmw );