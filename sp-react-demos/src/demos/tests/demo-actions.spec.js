import {addOne, subtractOne} from '../demo-actions';

describe('Testing basic reducer actions', () => {
  it('should return the right action type', () => {
    expect( addOne().type ).toEqual( 'INCREMENT' );
    expect( subtractOne().type ).toEqual( 'DECREMENT' );
  })
})