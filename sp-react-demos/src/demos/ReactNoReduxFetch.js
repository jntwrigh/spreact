import React, { Component } from 'react';

const PersonList = ( props ) => {
  return (
    <ul>
      {
        props.people.map( person => {
          return <li key={ person.id }>{ person.firstName } { person.lastName }</li>;
        } )
      }
    </ul>
  );
};

class DynamicPersonListContainer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      hasErrored: false,
      isLoading: false,
      people: []
    };
  }

  // Lifecycle method, because it's an error to call setState() before a
  // component has mounted
  componentDidMount() {
    this.fetchData( 'http://localhost:8001/people/' );
  }

  fetchData( url ) {
    this.setState( { isLoading: true } );

    fetch( url )
      .then( response => {
        if ( !response.ok ) {
          throw Error( response.statusText );
        }
        this.setState( { isLoading: false } );

        return response;
      } )
      .then( response => response.json() )
      .then( people => this.setState( { people } ) )
      .catch( err => this.setState( { hasErrored: true } ) );
  }

  render() {
    if ( this.state.isLoading ) {
      return (
        <p>Loading...</p>
      );
    } else if ( this.state.hasErrored ) {
      return (
        <h3>Something has gone terribly wrong!</h3>
      );
    }

    return (
      <section>
        <h3>List of people</h3>
        <PersonList people={ this.state.people }/>
      </section>
    );
  }
}

export default DynamicPersonListContainer;