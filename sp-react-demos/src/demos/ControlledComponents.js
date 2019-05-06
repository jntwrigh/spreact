import React, { Component } from 'react';

class ControlledComponents extends Component {
  constructor() {
    super();

    this.state = {
      demoText: ''
    };
  }

  updateState = ( event ) => {
    this.setState( {
      [ event.currentTarget.name ]: event.currentTarget.value
    } );
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="demo-text">Type text here: </label>
            <input id="demo-text"
                   type="text"
                   name="demoText"
                   value={ this.state.demoText }
                   onChange={ this.updateState }/>
          </div>
        </form>
        <div>
          <p>You typed: { this.state.demoText }.</p>
        </div>
      </div>
    );
  }
}

export default ControlledComponents;