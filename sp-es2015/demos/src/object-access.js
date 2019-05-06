import {CarFactory} from './car-factory'

let honda = CarFactory.buildCar( { make: 'Honda', model: 'Civic', freeze: true } );

console.log( 'Honda, initial state: ' + honda );

// Neither of these will work, both throwing an error
// honda.setModel( 'Accord' );
// honda.color = 'red';

// console.log( 'Honda, modified state: ' + honda.color + ' ' + honda );

let honda2 = {};
Object.assign( honda2, honda );
honda2.color = 'green';
// honda2.setModel( 'Accord' );

console.log( 'Honda2, modified state: ' + honda2.color + ' ' + honda2 );

// Object.create!
let honda3 = Object.create( honda );
honda3.color = 'red';
console.log( 'Honda3, modified state: ' + honda3.color + ' ' + honda3 );

console.log( 'honda === honda2: ', honda === honda2 );
console.log( 'honda === honda3: ', honda === honda3 );
console.log( 'honda.isPrototypeOf(honda2): ', honda.isPrototypeOf(honda2) );
console.log( 'honda.isPrototypeOf(honda3): ', honda.isPrototypeOf(honda3) );