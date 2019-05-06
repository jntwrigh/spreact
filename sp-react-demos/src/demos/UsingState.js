import React, {Component} from 'react';

class UsingState extends Component {
  constructor( props ) {
    super( props );
    this.renderCount = 0;
    this.state = {
      counter: 0
    };

    this.stateIncrementer = this.stateIncrementer.bind( this );
  }

  stateIncrementer() {
    let count = this.state.counter + 1;
    this.setState( {
      counter: count
    } )
  }

  render() {
    this.renderCount++;

    return (
      <div>
        <h3>Using state</h3>
        <ul className="list-unstyled">
          <li>State count: {this.state.counter}</li>
          <li>Render count: {this.renderCount}</li>
          <li>
            <button onClick={this.stateIncrementer}
                    className="btn btn-default">Click here to increment state.counter
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default UsingState;
