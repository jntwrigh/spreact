import React from 'react';
import TransactionListRow from './TransactionListRow';

function TransactionList( props ) {

  function handleRowClick(tx) {
    console.log('TransactionList.handleRowClick() clicked on ', tx);
    props.onRowClick(tx);
  }

  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Payee Name</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      {
        props.txList.map( tx => {
          return <TransactionListRow tx={tx} onRowClick={handleRowClick} key={tx.id}/>
        })
      }
      </tbody>
    </table> 
  );
}

export default TransactionList;
