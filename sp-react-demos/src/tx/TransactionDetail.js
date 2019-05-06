import React from 'react';
import CurrencyFormatter from '../CurrencyFormatter';

function TransactionDetail( props ) {
  return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          Transaction #{props.tx.id} [<CurrencyFormatter value={props.tx.amount} nosign/> to {props.tx.payee.payeeName}]
        </div>
        <ul className="list-group">
          <li className="list-group-item">Payor: {props.tx.person.firstName} {props.tx.person.lastName}</li>
          <li className="list-group-item">Payee: {props.tx.payee.payeeName}</li>
          <li className="list-group-item">From: {props.tx.account.accountType.accountTypeName}</li>
          <li className="list-group-item">Amount: <CurrencyFormatter value={props.tx.amount} colors/></li>
          <li className="list-group-item">Category: {props.tx.category.categoryName}</li>
        </ul>
      </div>
  );
}

export default TransactionDetail;
