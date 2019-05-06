import React from 'react';
import {Link} from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

function Demos( { routes } ) {
  return (
    <div>
      <div className="row">
        <div className="col-md-3" style={{ borderRight: '2px solid black', height: '100vh' }}>
          <h3>Demos</h3>
          <ul>
            { routes.map( (route, i) => {
              return <li key={i}><Link to={route.path}>{route.label}</Link></li>;
            } ) }
          </ul>
        </div>
        <div className="col-md-8">
          {routes.map( ( route, i ) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ) )}
        </div>
      </div>
    </div>
  );
}

export default Demos;
