import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

// Import Bootstrap, make it available to all sub-components
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './css/local.css';

import { peopleDAO } from './data/class-data';
import routes from './routes';
import RouteWithSubRoutes from './RouteWithSubRoutes';

class App extends Component {
  constructor() {
    super();
    this.numPeople = peopleDAO.size();

    this.routes = routes;

    // console.log( 'There are %d transactions.', txDAO.size() );
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Banking</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><NavLink activeClassName="active" to="/tx">Transactions</NavLink></li>
                <li><NavLink activeClassName="active" to="/demos">Demos</NavLink></li>
              </ul>
            </div>
          </nav>

          <div>
            { this.routes.map( ( route, index ) => (
              <RouteWithSubRoutes key={ index } { ...route }/>
            ) ) }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
