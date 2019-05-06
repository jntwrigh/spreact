import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';

// Action creators
const setHasErrored = ( bool ) => {
  return {
    type: 'PEOPLE_HAS_ERRORED',
    hasErrored: bool
  };
};

const setIsLoading = ( bool ) => {
  return {
    type: 'PEOPLE_IS_LOADING',
    isLoading: bool
  };
};

const setFetchDataSuccess = ( people ) => {
  return {
    type: 'PEOPLE_FETCH_DATA_SUCCESS',
    people
  };
};

const peopleFetchData = ( url ) => {
  return ( dispatch ) => {
    dispatch( setIsLoading( true ) );

    fetch( url )
      .then( ( response ) => {
        if ( !response.ok ) {
          throw Error( response.statusText );
        }

        dispatch( setIsLoading( false ) );

        return response;
      } )
      .then( ( response ) => response.json() )
      .then( ( people ) => dispatch( setFetchDataSuccess( people ) ) )
      .catch( () => dispatch( setHasErrored( true ) ) );
  };
};

// Reducers
const peopleHasErrored = ( state = false, action ) => {
  switch ( action.type ) {
    case 'PEOPLE_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

const peopleIsLoading = ( state = false, action ) => {
  switch ( action.type ) {
    case 'PEOPLE_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};

const people = ( state = [], action ) => {
  switch ( action.type ) {
    case 'PEOPLE_FETCH_DATA_SUCCESS':
      return action.people;

    default:
      return state;
  }
};

const peopleApp = combineReducers( { people, peopleHasErrored, peopleIsLoading } );

// Store
const configureStore = ( initialState ) => {
  return createStore( peopleApp, initialState, applyMiddleware( thunk ) );
};

const store = configureStore();

class PersonList extends Component {
  componentDidMount() {
    this.props.fetchData( 'http://localhost:8001/people/' );
  }

  render() {
    if ( this.props.isLoading ) {
      return (
        <p>Loading...</p>
      );
    } else if ( this.props.hasErrored ) {
      return (
        <h3>Something has gone terribly wrong!</h3>
      );
    }

    return (
      <ul>
        {
          this.props.people.map( person => {
            return <li key={ person.id }>{ person.firstName } { person.lastName }</li>;
          } )
        }
      </ul>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    people: state.people,
    hasErrored: state.peopleHasErrored,
    isLoading: state.peopleIsLoading
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( url ) => dispatch( peopleFetchData( url ) )
  };
};

PersonList = connect( mapStateToProps, mapDispatchToProps )( PersonList );

class ReduxPersonListContainer extends Component {

  render() {
    return (
      <Provider store={ store }>
        <section>
          <h3>List of people</h3>
          <PersonList/>
        </section>
      </Provider>
    );
  }
}

export default ReduxPersonListContainer;