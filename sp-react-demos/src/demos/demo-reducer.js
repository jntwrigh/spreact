// Reducer
const reducer = ( state = 0, action ) => {
  console.log( 'Called reducer' );
  switch ( action.type ) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export {reducer};