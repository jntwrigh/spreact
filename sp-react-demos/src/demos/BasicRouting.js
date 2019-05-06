import React from 'react';
import { Link, Route } from 'react-router-dom';

const BasicRouting = () => {
  return (
    <div>
      <p>Click on the links below. Watch the URL change, as well as the section below the links.</p>
      <ul>
        <li><Link to="/demos/basic-routing/first">First route</Link></li>
        <li><Link to="/demos/basic-routing/second">Second route</Link></li>
        <li><Link to="/demos/basic-routing/third">Third route</Link></li>
      </ul>
      <div>
        <Route path="/demos/basic-routing/first" component={ FirstRoute }/>
        <Route path="/demos/basic-routing/second" component={ SecondRoute }/>
        <Route path="/demos/basic-routing/third" component={ ThirdRoute }/>
      </div>
    </div>
  );
};

const FirstRoute = () => (
  <h3>Route number one</h3>
);

const SecondRoute = () => (
  <h3>Route the second</h3>
);

const ThirdRoute = () => (
  <h3>The third route</h3>
);

export default BasicRouting;
