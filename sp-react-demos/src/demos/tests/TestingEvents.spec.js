import React from 'react';
import {mount} from 'enzyme';

import {
  Counter, ButtonBar,
  ButtonBarHandler, ButtonBarInline
} from '../CustomEvents';

test( 'Testing counter and clicks', () => {
  let wrapper = mount( <Counter/> );

  // Verify initial state of 0
  expect( wrapper.state( 'counter' ) ).toBe( 0 );

  // Click on increment
  wrapper.find( ButtonBar ).find( 'button' ).at( 0 ).simulate( 'click' );
  expect( wrapper.state( 'counter' ) ).toBe( 1 );

  // Click on decrement
  wrapper.find( ButtonBar ).find( 'button' ).at( 1 ).simulate( 'click' );
  expect( wrapper.state( 'counter' ) ).toBe( 0 );

} );

test('Testing properties', () => {
  let wrapper = mount( <Counter/> );

  // Verify that onIncrement is a function in ButtonBarHandler
  let typeOfOnIncrement = wrapper.find( ButtonBarHandler ).prop( 'onIncrement' );
  expect( typeOfOnIncrement ).toEqual( expect.any( Function ) );

})