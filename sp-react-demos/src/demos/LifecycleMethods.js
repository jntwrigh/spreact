import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LifecycleMethods extends Component {
  constructor() {
    super();

    console.log( 'LifecycleMethods: Called constructor()' );
    this.state = {
      value: 1
    };
  }

  static getDerivedStateFromProps() {
    console.log( 'LifecycleMethods: Called getDerivedStateFromProps()' );
    return { value: 2 };
  }

  componentDidMount() {
    console.log( 'LifecycleMethods: Called componentDidMount()' );
  }

  shouldComponentUpdate() {
    console.log( 'LifecycleMethods: Called shouldComponentUpdate()' );
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log( 'LifecycleMethods: Called getSnapshotBeforeUpdate()' );

    // We aren't actually interested in a snapshot
    return null;
  }

  componentDidUpdate() {
    console.log( 'LifecycleMethods: Called componentDidUpdate()' );
  }

  componentWillUnmount() {
    console.log( 'LifecycleMethods: Called componentWillUnmount()' );
  }

  render() {
    console.log( 'LifecycleMethods: Called render()' );
    if ( this.state.hasError ) {
      return (
        <div>
          <h3>An error happened, probably due to pressing the "Throw Error" button.</h3>
        </div>
      );
    }

    return (
      <div>
        <h2>Lifecycle Methods demo</h2>
        <ul>
          <li>Click on this button to update the state:
            <button className="btn btn-primary"
                    onClick={ () => this.setState(
                      { value: this.value + 1 } ) }>Update State</button>
          </li>
          <li>This is a <Link to="/demos/passing-data">link</Link> to another demo. Click on it to see
            componentWillUnmount() fire.
          </li>
        </ul>

      </div>
    );
  }
}

export default LifecycleMethods;