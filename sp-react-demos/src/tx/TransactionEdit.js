import React, {Component} from 'react';
import DateField from '../DateField';
import PayeesDropDown from '../PayeesDropDown';
import CategoriesDropDown from '../CategoriesDropDown';
import AccountsDropDown from '../AccountsDropDown';
import TxTypesDropDown from './TxTypesDropDown';

class TransactionEdit extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      id        : props.tx.id,
      firstName : props.tx.person.firstName,
      lastName  : props.tx.person.lastName,
      personId  : props.tx.person.id,
      payeeId   : props.tx.payeeId,
      accountId : props.tx.accountId,
      amount    : props.tx.amount,
      categoryId: props.tx.categoryId,
      txDate    : props.tx.txDate,
      txType    : props.tx.txType
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSave = this.handleSave.bind( this );
  }

  handleSave( event ) {
    event.preventDefault();
    this.props.onSave( this.state );
  }

  handleChange( event ) {
    console.debug( 'TransactionEdit#handleChange with event: ', event );
    let data = {};
    data[ event.target.name ] = event.target.value;
    this.setState( data )
  }

  render() {
    return (
      <form>
        <h3>Editing transaction {this.state.id}</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input className="form-control"
                 type="text"
                 name="firstName"
                 value={this.state.firstName}
                 onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input className="form-control"
                 type="text"
                 name="lastName"
                 value={this.state.lastName}
                 onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="payee">Payee: </label>
          <PayeesDropDown value={this.state.payeeId}
                          name="payeeId"
                          className="form-control"
                          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="account">Account: </label>
          <AccountsDropDown value={this.state.accountId}
                            personId={this.state.personId}
                            name="accountId"
                            className="form-control"
                            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount: </label>
          <input className="form-control"
                 type="number"
                 name="amount"
                 step="0.01"
                 value={this.state.amount}
                 onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category: </label>
          <CategoriesDropDown value={this.state.categoryId}
                              name="categoryId"
                              className="form-control"
                              onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <DateField selectedDate={this.state.txDate}
                     className="form-control"
                     name="txDate"
                     onBlur={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type: </label>
          <TxTypesDropDown value={this.state.txType}
                           name="txType"
                           onChange={this.handleChange}
                           className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-default" onClick={this.handleSave}>Save</button>
        </div>
      </form>
    );
  }

}

export default TransactionEdit;
