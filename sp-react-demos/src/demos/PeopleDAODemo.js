import React, { Component } from 'react';
import peopleDAO from './people-dao';

class PeopleDaoDemo extends Component {
  constructor() {
    super();

    this.state = {
      size: 0,
      person: null,
      people: []
    };
  }

  getSize = () => {
    peopleDAO.size()
             .then( size => this.setState( { size } ) );
  };

  getPerson = () => {
    peopleDAO.get( 201 )
             .then( person => this.setState( { people: [], person } ) );
  };

  getPeople = () => {
    peopleDAO.list()
             .then( people => this.setState( { person: null, people } ) );
  };

  render() {
    let results = '';

    if ( this.state.person ) {
      results = <div>You retrieved { this.state.person.firstName } { this.state.person.lastName }</div>;
    } else if ( this.state.people.length > 0 ) {
      results = <table className="table">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.people.map( person => (
            <tr key={person.id}>
              <td>{ person.firstName }</td>
              <td>{ person.lastName }</td>
            </tr>
          ) )
        }
        </tbody>
      </table>;
    }

    return (
      <div>
        <ul>
          <li>How many people? <span>{ this.state.size ? this.state.size : '' } &nbsp;</span>
            <button className="btn btn-sm btn-warning" onClick={ this.getSize }>Click</button>
          </li>
          <li>A random person (displayed below): <button className=" btn btn-sm btn-success"
                                                         onClick={ this.getPerson }>Click</button></li>
          <li>All people (displayed below): <button className=" btn btn-sm btn-primary"
                                                    onClick={ this.getPeople }>Click</button></li>
        </ul>

        { results }
      </div>
    );
  }
}

export default PeopleDaoDemo;