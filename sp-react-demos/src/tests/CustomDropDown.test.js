import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CustomDropDown from '../CustomDropDown';
import { peopleDAO } from '../data/class-data';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

let personList;

beforeEach( () => {
  personList = peopleDAO.list();
} );

test( 'CustomDropDown single labels render correctly', () => {
  const dropDown = shallow(
    <CustomDropDown idField="id" label="lastName" options={ personList }/>
  );

  expect( dropDown.text() ).toMatch( new RegExp( personList[ 0 ].lastName ) );

  // Negative confirmation
  expect( dropDown.text() ).not.toMatch( /Paxton/ );
} );

test( 'CustomDropDown multiple labels render correctly', () => {
  const dropDown = shallow(
    <CustomDropDown idField="id" label="firstName lastName" options={ personList }/>
  );

  expect( dropDown.text() ).toMatch( new RegExp( `${personList[ 0 ].firstName} ${personList[ 0 ].lastName}` ) );

  // Negative confirmation
  expect( dropDown.text() ).not.toMatch( /Paxton/ );
} );

it( 'CustomDropDown selections work', () => {
  const dropDown = shallow(
    <CustomDropDown idField="id" label="lastName" options={ personList }/>
  );

  const select = dropDown.find( 'select' );
  select.simulate( 'change', { target: { value: '203' } } );

  expect( dropDown.state( 'value' ) ).toEqual( '203' );

} );

it( 'CustomDropDown defaultValue test', () => {
  const dropDown = shallow(
    <CustomDropDown idField="id" label="lastName" options={ personList } defaultValue="203"/>
  );

  expect( dropDown.state( 'value' ) ).toEqual( '203' );
} );

// Snapshot test
it( 'CustomDropDown snapshot test', () => {
  const tree = renderer
    .create( <CustomDropDown idField="id" label="lastName" options={ personList } defaultValue="203"/> )
    .toJSON();

  expect( tree ).toMatchSnapshot();

} );

it( 'CustomDropDown placeholder snapshot', () => {
  const tree = renderer
    .create( <CustomDropDown idField="id"
                             label="lastName"
                             options={ personList }
                             defaultValue="203"
                             placeholder="Select a person"/> )
    .toJSON();

  expect( tree ).toMatchSnapshot();

} );
