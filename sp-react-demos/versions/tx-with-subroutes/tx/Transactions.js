import React from 'react';
import {Link} from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

function Transactions( { routes } ) {
  return (
    <section>
      <div className="row">
        <div className="col-md-12">
          <h2>The Transactions Component</h2>
          <ul>
            <li><Link to="/tx/detail/4">Transaction detail</Link></li>
            <li><Link to="/tx/edit/4">Transaction edit</Link></li>
            <li><Link to="/tx/search">Transaction search</Link></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {routes.map( ( route, i ) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ) )}
        </div>
      </div>
    </section>
  );
}

export default Transactions;
