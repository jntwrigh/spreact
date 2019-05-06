import React from 'react';
import renderer from 'react-test-renderer';

import TreeComponent from '../TreeComponent';

it( 'checks out against a snapshot', () => {
  const tree = renderer.create(
    <TreeComponent/>
  ).toJSON();
  expect( tree ).toMatchSnapshot();
} );
