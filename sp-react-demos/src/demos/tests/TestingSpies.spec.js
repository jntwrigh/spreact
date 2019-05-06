import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import {
  Counter, ButtonBar,
  ButtonBarHandler, ButtonBarInline
} from '../CustomEvents';

test( 'A basic spy', () => {
  const spy = sinon.spy();
  const wrapper = shallow( <ButtonBar onIncrement={spy} onDecrement={spy}/> );

  // Verify that the spy has not been called
  expect( spy.called ).toBeFalsy();

  // Call the spy once
  wrapper.find( 'button' ).at( 0 ).simulate( 'click' );
  expect( spy.calledOnce ).toBeTruthy();

  // Call the spy a second time
  wrapper.find( 'button' ).at( 1 ).simulate( 'click' );
  expect( spy.calledTwice ).toBeTruthy();
  expect( spy.calledOnce ).not.toBeTruthy();

} );

test( 'A wrapped spy', () => {
  const wrapper = mount( <Counter/> );
  const coinSpy = sinon.spy( wrapper.get( 0 ), 'handleIncrement' );
  wrapper.update();

  // Verify expectations
  expect( coinSpy.called ).toBeFalsy();

  wrapper.find( ButtonBar ).find( 'button' ).at( 0 ).simulate( 'click' );

  // Should have seen the wrapper called once
  expect( coinSpy.called ).toBeTruthy();
  expect( coinSpy.calledOnce ).toBeTruthy();

} );