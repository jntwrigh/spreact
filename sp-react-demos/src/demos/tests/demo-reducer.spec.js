import { reducer } from '../demo-reducer';
import { addOne, subtractOne } from '../demo-actions';

describe( 'Testing demo-reducer reducers', () => {
  let incrementAction, decrementAction;

  beforeAll( () => {
    incrementAction = addOne();
    decrementAction = subtractOne();
  } );

  it( 'should increment state', () => {
    let startingState = 10;
    expect( reducer( startingState, incrementAction ) ).toEqual( startingState + 1 );
  } );

  it('should decrement state', () => {
    let startingState = 10;
    expect( reducer( startingState, decrementAction ) ).toEqual( startingState - 1 );
  } )
} )