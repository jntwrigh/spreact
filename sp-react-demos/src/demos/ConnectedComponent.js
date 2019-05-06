import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// Reducer
const reducer = ( state = 0, action ) => {
  // console.log( 'Called reducer' );
  switch ( action.type ) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Actions
const addOne = () => {
  return {
    type: 'INCREMENT'
  };
};

const subtractOne = () => {
  return {
    type: 'DECREMENT'
  };
};

// Components
const Counter = ( { value, onIncrement, onDecrement } ) => {
  console.log( 'Counter.render() called with value: ', value );
  return (
    <div>
      <h3>{ value }</h3>
      <button onClick={ onIncrement }>Add one</button>
      <button onClick={ onDecrement }>Subtract one</button>
    </div>
  );
};

const mapStateToProps = function( state ) {
  return {
    value: state
  };
};

const mapDispatchToProps = function( dispatch ) {
  return {
    onIncrement: () => dispatch( addOne() ),
    onDecrement: () => dispatch( subtractOne() )
  };
};

const ReduxCounter = connect( mapStateToProps, mapDispatchToProps )( Counter );

// Store
const store = createStore( reducer );

const ConnectedComponent = () => (
  <Provider store={ store }>
    <div>
      <h2>Connected component: </h2>
      <ReduxCounter/>
    </div>
  </Provider>
);

export default ConnectedComponent;