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

// Store
const store = createStore( reducer );

const ContainerComponent = ( props ) => {

  console.log( 'Props: ', props );

  const handleIncrement = () => {
    props.dispatch( addOne() );
  };

  const handleDecrement = () => {
    props.dispatch( subtractOne() );
  };

  return (
    <div>
      <h2>Connected container</h2>
      <p>(This container has been connected, but &lt;Counter/&gt; has not</p>
      <Counter value={ props.value }
               onIncrement={ handleIncrement }
               onDecrement={ handleDecrement }
      />
    </div>
  );
};

const mapStateToProps = ( state ) => ( {
  value: state
} );

const ConnectedContainer = connect( mapStateToProps )( ContainerComponent );

const ConnectedWrapper = () => (
  <Provider store={ store }>
    <ConnectedContainer/>
  </Provider>

);

export default ConnectedWrapper;