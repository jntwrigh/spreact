import {Car} from './Car';

var honda = new Car();
honda.setMake( 'Honda' );
honda.setModel( 'Civic' );
console.log( 'Old car: ' + honda );

var bmw = new Car( 'BMW', 'M3' );
console.log( 'New car: ' + bmw );
