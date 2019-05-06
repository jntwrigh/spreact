import React, {Component} from 'react';

class CustomEventsContainer extends Component {
  render() {
    return (
      <div>
        <h3>Custom Events</h3>
        <span>Counter: </span><Counter/>
      </div>
    );
  }
}

export default CustomEventsContainer;

class Counter extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      counter: 0
    };

    this.handleIncrement = this.handleIncrement.bind( this );
    this.handleDecrement = this.handleDecrement.bind( this );
  }

  handleIncrement() {
    this.setState( { counter: this.state.counter + 1 } )
  }

  handleDecrement() {
    this.setState( { counter: this.state.counter - 1 } )
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <ButtonBar onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/><br/>
        <ButtonBarHandler onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/><br/>
        <ButtonBarInline onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
      </div>
    )
  }
}

const ButtonBar = ( { onIncrement, onDecrement } ) => {
  return (
    <div>
      <span>ButtonBar: </span>
      <div className="btn-group">
        <button onClick={onIncrement} className="btn btn-default">Increment +</button>
        <button onClick={onDecrement} className="btn btn-default">Decrement -</button>
      </div>
    </div>
  )
};

// Gives you a chance to do something with the event locally before calling
// the parent function.
const ButtonBarHandler = ( { onIncrement, onDecrement } ) => {
  const handleOnIncrement = ( event ) => {
    console.log( 'ButtonBarHandler.handleOnIncrement()' );
    onIncrement( event );
  };

  const handleOnDecrement = ( event ) => {
    console.log( 'ButtonBarHandler.handleOnDecrement()' );
    onDecrement( event );
  };

  return (
    <div>
      <span>ButtonBarHandler: </span>
      <div className="btn-group">
        <button onClick={handleOnIncrement} className="btn btn-default">Increment +</button>
        <button onClick={handleOnDecrement} className="btn btn-default">Decrement -</button>
      </div>
    </div>
  )
};

// Less efficient (could cause more rendering) but has access
// to local state if needed
const ButtonBarInline = ( { onIncrement, onDecrement } ) => {
  return (
    <div>
      <span>ButtonBarInline: </span>
      <div className="btn-group">
        <button onClick={() => onIncrement()} className="btn btn-default">Increment +</button>
        <button onClick={() => onDecrement()} className="btn btn-default">Decrement -</button>
      </div>
    </div>
  )
};

export {Counter, ButtonBar, ButtonBarHandler, ButtonBarInline};