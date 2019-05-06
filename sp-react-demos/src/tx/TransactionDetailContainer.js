import React from 'react';
import {tx} from '../../data/class-data';
import TransactionDetail from './TransactionDetail';

function TransactionDetailContainer( props ) {
  console.log( 'tx: ', props.tx || props.match.params.id );
  let displayTx = null;

  if ( props.match.params.id ) {
    displayTx = tx.get( props.match.params.id );
  } else if ( props.tx ) {
    displayTx = props.tx;
  }

  return <TransactionDetail tx={displayTx}/>
}

export default TransactionDetailContainer;
