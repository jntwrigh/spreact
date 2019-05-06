import React from 'react';
import PropTypes from 'prop-types';

const PropTypesContainer = () => {
  return (
    <section>
      <h3>A Transaction: </h3>
      <div className="row">
        <div className="col-md-8">
          <TransactionDetail tx={tx}/>
        </div>
      </div>
    </section>
  )
};

export default PropTypesContainer;

const TransactionDetail = ( { tx } ) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        Transaction #{tx.id} [{tx.amount} to {tx.payee.payeeName}]
      </div>
      <ul className="list-group">
        <li className="list-group-item">Payor: {tx.person.firstName} {tx.person.lastName}</li>
        <li className="list-group-item">Payee: {tx.payee.payeeName}</li>
        <li className="list-group-item">From: {tx.account.accountName}</li>
        <li className="list-group-item">Amount: {tx.amount}</li>
        <li className="list-group-item">Category: {tx.category.categoryName}</li>
      </ul>
    </div>
  );
}

TransactionDetail.propTypes = {
  tx: PropTypes.shape( {
    id    : PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    person: PropTypes.shape( {
      firstName: PropTypes.string.isRequired,
      lastName : PropTypes.string.isRequired
    } ),
    payee : PropTypes.shape( {
      payeeName: PropTypes.string.isRequired
    } ),
    txTypeName: PropTypes.oneOf(['Debit', 'Credit'])
  } ).isRequired
};

const tx = {
  "id": "1",
  "payeeId": "1",
  "personId": "201",
  "categoryId": "102",
  "category": {
    "id": "102",
    "categoryName": "Housing",
    "categoryType": "expense"
  },
  "accountId": "1",
  "txType": "2",
  "txDate": "2016-06-01T04:00:00.000Z",
  "amount": -1600,
  "payee": {
    "id": "1",
    "payeeName": "DCH Mortgages",
    "address": "1285 Rezlog Plaza",
    "city": "Powhatan",
    "state": "RI",
    "zip": "02212",
    "categoryId": "102",
    "image": null,
    "motto": null,
    "active": true,
    "category": {
      "id": "102",
      "categoryName": "Housing",
      "categoryType": "expense"
    }
  },
  "person": {
    "firstName": "Jenny",
    // Uncomment the next line to get rid of the warning
    // "lastName": "Sparks",
    "gender": "female",
    "dateOfBirth": "1995-01-01",
    "id": "201",
    "address": {
      "street": "47 Kuhlman Place",
      "city": "New Queensborough",
      "state": "NV",
      "zip": "90498-1073"
    }
  },
  "account": {
    "id": "1",
    "personId": "201",
    "accountTypeId": "1",
    "startingBalance": 1000,
    "person": {
      "firstName": "Jenny",
      "lastName": "Sparks",
      "gender": "female",
      "dateOfBirth": "1995-01-01",
      "id": "201",
      "address": {
        "street": "47 Kuhlman Place",
        "city": "New Queensborough",
        "state": "NV",
        "zip": "90498-1073"
      }
    },
    "accountType": {
      "id": "1",
      "accountTypeName": "Checking",
      "interestRate": 0
    },
    "accountName": "Checking"
  },
  // Change the next line to violate the "oneOf" stipulation
  "txTypeName": "Debit"
};