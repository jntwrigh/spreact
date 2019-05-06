import React, {Component} from 'react';

class EventHandlingContainer extends Component {
  render() {
    return (
      <div>
        <h3>Functional Event Handling</h3>
        <FunctionalEventHandling/>

        <h3>Class-based Event Handling</h3>
        <ClassBasedEventHandling foo="bar"/>
      </div>
    );
  }
}

export default EventHandlingContainer;

const FunctionalEventHandling = () => {
  function handlerOne( event ) {
    console.log( 'FunctionalEventHandling.handlerOne() event: ', event );
  }

  return (
    <ul>
      <li>Standard, best practice: click this button:
        <button onClick={handlerOne}
                className="btn btn-default">
          Click me!
        </button>
      </li>
      <li>Non-standard, in-line bound, inefficient but sometimes useful:
        <button onClick={( e ) => {
          console.log( 'FunctionalEventHandling inline handler event: ', e )
        }}
                className="btn btn-default">
          Click me!
        </button>
      </li>
    </ul>
  )
}

class ClassBasedEventHandling extends Component {
  constructor( props ) {
    super( props );

    this.boundHandler = this.boundHandler.bind( this );

  }

  boundHandler( event ) {
    console.log( 'ClassBasedEventHandling.boundHandler() event: ', event );
    console.log( 'ClassBasedEventHandling.boundHandler() props: ', JSON.stringify( this.props ) );
  }

  unboundHandler( event ) {
    console.log( 'ClassBasedEventHandling.unboundHandler() event: ', event );

    // Comment out the if to see this code run. It will throw an error!
    if ( this && this.props ) {
      console.log( 'ClassBasedEventHandling.unboundHandler() props: ', JSON.stringify( this.props ) );
    }
  }

  experimentalHandler = ( event ) => {
    console.log( 'ClassBasedEventHandling.experimentalHandler() event: ', event );
    console.log( 'ClassBasedEventHandling.experimentalHandler() props: ', JSON.stringify( this.props ) );
  }

  render() {
    return (
      <ul>
        <li>Bound handler:
          <button onClick={this.boundHandler}
                  className="btn btn-default">
            Click me
          </button>
        </li>
        <li>Unbound handler:
          <button onClick={this.unboundHandler}
                  className="btn btn-default">
            Click me
          </button>
        </li>
        <li>In-line binding (works, less efficient)
          <button onClick={( e ) => this.unboundHandler( e )}
                  className="btn btn-default">
            Click me
          </button>
        </li>
        <li>Experimental handler (supported by create-react-app):
          <button onClick={this.experimentalHandler}
                  className="btn btn-default">
            Click me
          </button>
        </li>
      </ul>
    )
  }
}