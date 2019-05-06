import {Car} from './Car-access'

let factory = {
  buildCar: ( config ) => {
    let c = new Car( config.make, config.model );

    if ( config.preventExtensions ) {
      Object.preventExtensions( c );
    } else if ( config.seal ) {
      Object.seal( c );
    } else if ( config.freeze ) {
      Object.freeze( c )
    }

    return c;
  }
}

export {factory as CarFactory};
