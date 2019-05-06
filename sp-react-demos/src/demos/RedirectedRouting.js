import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

const RedirectedRouting = () => {
  return (
    <div>
      <ul>
        <li><Link to="/demos/redirected-routing/original">The original route, with no redirection</Link></li>
        <li><Link to="/demos/redirected-routing/new-route">The new route</Link></li>
        <li><Link to="/demos/redirected-routing/original-redirected">The original route, redirected</Link></li>
      </ul>
      <div>
        <Route path="/demos/redirected-routing/original" component={ OriginalRoute }/>
        <Route path="/demos/redirected-routing/new-route" component={ NewRoute }/>
        <Route path="/demos/redirected-routing/original-redirected"
               render={ ( props ) => <Redirect to="/demos/redirected-routing/new-route" { ...props }/> }/>
      </div>
    </div>
  );
};

const OriginalRoute = () => (
  <h3>Original Route</h3>
);

const NewRoute = ( props ) => {

  console.log( 'NewRoute.props: ', props );

  return (
    <h3>A new route</h3>
  );
};

export default RedirectedRouting;
