import React from 'react';
import { Route } from 'react-router-dom';

const ProgrammaticRouting = ( props ) => {
  const { history } = props;
  return (
    <div>
      <p>Click on the links below. Watch the URL change, as well as the section below the links.</p>
      <ul>
        <li>
          <button className="btn btn-primary" onClick={ () => history.push( '/demos/programmatic-routing/first' ) }>
            First route
          </button>
        </li>
        <li>
          <button className="btn btn-info" onClick={ () => history.push( '/demos/programmatic-routing/second' ) }>
            Second route
          </button>
        </li>
        <li>
          <button className="btn btn-success" onClick={ () => history.push( '/demos/programmatic-routing/third' ) }>
            Third route
          </button>
        </li>
      </ul>
      <div>
        <Route path="/demos/programmatic-routing/first" component={ FirstRoute }/>
        <Route path="/demos/programmatic-routing/second" component={ SecondRoute }/>
        <Route path="/demos/programmatic-routing/third" component={ ThirdRoute }/>
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

export default ProgrammaticRouting;