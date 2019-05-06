import React from 'react';

function TransactionListRow( props ) {
  function handleClick( tx ) {
    console.log( 'TransactionListRow.handleClick()' );
    props.onRowClick( tx );
  }

  return (
    <tr onClick={() => handleClick(props.tx)}
        className="clickable-row">
      <td>{props.tx.payee.payeeName}</td>
      <td>{props.tx.category ? props.tx.category.categoryName : props.tx.categoryId}</td>
      <td>{props.tx.amount}</td>
    </tr>
  );
}

export default TransactionListRow;
