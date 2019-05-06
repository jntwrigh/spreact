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
          <p>Type in the text field, and then blur away from it by using the Tab key.</p>
          <div>
            <label htmlFor="demo-text">Type text here: </label>
            <input id="demo-text"
                   type="text"
                   name="demoText"
                   onBlur={ this.updateState }/>
            <button className="btn btn-primary">Do nothing, really</button>
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