import { Car } from './Car-with-getters-and-setters';

var honda = new Car();
honda.setMake( 'Honda' );
honda.setModel( 'Civic' );
console.log( 'Old car: ' + honda );

var bmw = new Car();
bmw.manufacturer = 'BMW';
bmw.model = 'M3';

console.log( 'New car: ' + bmw );