import React, {Component} from 'react';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';
import {txDAO} from '../data/class-data';

class Transactions extends Component {
  constructor( props ) {
    super( props );

    let defaultTx = txDAO.get( 1 );

    this.state = {
      currentView: 'list',
      tx         : defaultTx,
      txList     : txDAO.list()
    };

    this.handleRowClick = this.handleRowClick.bind( this );
    this.backToList = this.backToList.bind( this );
    this.getNextTx = this.getNextTx.bind( this );
    this.getPreviousTx = this.getPreviousTx.bind( this );
  }

  handleRowClick( tx ) {
    console.log( 'Transactions.handleRowClick(): ', tx );
    this.setState( {
      currentView: 'detail',
      tx         : tx
    } );
  }

  getNextTx() {
    let { tx, txList } = this.state;
    let pos = Math.min( txList.length - 1, txList.indexOf( tx ) + 1 );

    if ( txList[pos] ) {
      this.setState( {
        tx: txList[pos]
      } );
    }
  }

  getPreviousTx() {
    let { tx, txList } = this.state;
    let pos = Math.max( 0, txList.indexOf( tx ) - 1 );

    if ( txList[pos] ) {
      this.setState( {
        tx: txList[pos]
      } );
    }
  }


  backToList() {
    this.setState( { currentView: 'list' } )
  }

  render() {
    let view = (
      <div className="row">
        <div className="col-md-12">
          <TransactionList txList={this.state.txList} onRowClick={this.handleRowClick}/>;
        </div>
      </div>
    );

    if ( this.state.currentView === 'detail' ) {
      view = (
        <section>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <TransactionDetail tx={this.state.tx}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="text-center">
                <div className="btn-group">
                  <button className="btn btn-default" onClick={this.getPreviousTx}>&laquo; Previous</button>
                  <button className="btn btn-default" onClick={this.backToList}>Return to List</button>
                  <button className="btn btn-default" onClick={this.getNextTx}>Next &raquo;</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2>Transactions</h2>
            </div>
          </div>
        </div>
        {view}
      </section>
    );
  }
}

export default Transactions;
