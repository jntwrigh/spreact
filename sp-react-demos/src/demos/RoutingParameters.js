import React from 'react';
import { Link, Route } from 'react-router-dom';

const RoutingParameters = () => {
  return (
    <div>
      <ul>
        <li><Link to="/demos/routing-params/">This route, with no parameters</Link></li>
        <li><Link to="/demos/routing-params/12345">This route, with a numeric parameter</Link></li>
        <li><Link to="/demos/routing-params/Hello">This route, with a string parameter</Link></li>
      </ul>
      <div>
        <Route path="/demos/routing-params/:foo" render={ ( { match } ) => {

          if ( match.params.foo ) {
            return ( <p>Parameter was <code>{ match.params.foo }</code></p> );
          } else {
            // This does not ever match because if there is nothing after "/routing-params" in the
            // URL, the <Route> component will not render.
            return ( <p>No URL parameter found</p> );
          }

        } }/>
      </div>
    </div>
  );
};

export default RoutingParameters;
