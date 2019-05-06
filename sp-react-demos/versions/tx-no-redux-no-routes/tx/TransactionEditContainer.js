import React, {Component} from 'react';
import moment from 'moment';
import {tx} from '../../data/class-data';
import TransactionEdit from './TransactionEdit';

class TransactionEditContainer extends Component {

  constructor( props ) {
    super( props );

    console.log( 'tx: ', props.tx || props.match.params.id );
    let displayTx = null;

    if ( props.match.params.id ) {
      displayTx = tx.get( props.match.params.id );
    } else if ( props.tx ) {
      displayTx = props.tx;
    }

    console.debug( 'TransactionEditContainer, Found tx: ', displayTx );

    this.state = {
      tx: displayTx
    };

    this.handleSave = this.handleSave.bind(this);

  }

  handleSave(txData) {
    console.debug('Invoked TransactionEditContainer.handleSave()');

    let editedTx = tx.get(txData.id);

    editedTx.payeeId = txData.payeeId;
    editedTx.accountId = txData.accountId;
    editedTx.categoryId = txData.categoryId;
    editedTx.txType = txData.txType;
    editedTx.txDate = moment(txData.txDate).toISOString();
    editedTx.amount = txData.amount;


  }

  render() {
    return <TransactionEdit tx={this.state.tx} onSave={this.handleSave}/>
  }
}

export default TransactionEditContainer;
