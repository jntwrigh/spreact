import {combineReducers} from 'redux';
import {txDAO} from '../data/class-data';

const txList = txDAO.list();

const tx = ( state = txList[ 0 ], action ) => {
  let pos = 0;
  switch ( action.type ) {
    case 'GET_NEXT_TX':
      pos = Math.min( txList.length - 1, txList.indexOf( action.tx ) + 1 );
      return { ...txList[ pos ] };

    case 'GET_PREVIOUS_TX':
      pos = Math.max( 0, txList.indexOf( tx ) - 1 );
      return { ...txList[ pos ] };

    default:
      return state;

  }
};

const txs = (state = txDAO.list(), action) => {
  switch (action.type) {
    case 'GET_TX_LIST':
      return [...state];
    default:
      return [...state];
  }

}

const txApp = combineReducers( { tx, txs } );

export default txApp;