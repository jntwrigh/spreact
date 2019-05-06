import React, {Component} from 'react';

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>Class properties</h3>
        <div>General properties: {JSON.stringify( this.props )}</div>
        <div>A specific property: {this.props.name}</div>
      </div>
    );
  }
}

export default ClassProps;
