import React, {Component} from 'react';
import {accountsDAO} from './data/class-data';
import CustomDropDown from './CustomDropDown';

class AccountsDropDown extends Component {
  constructor( props ) {
    super( props );
    this.accounts = accountsDAO.list( { personId: props.personId } );

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind( this );

    this.domProps = {
      name       : props.name,
      className  : props.className,
      placeholder: props.placeholder || 'Select a account'
    }
  }

  handleChange( event ) {
    this.setState( {
      value: event.target.value
    } );

    if ( this.props.onChange ) this.props.onChange( event )
  }

  render() {
    return (
      <CustomDropDown options={this.accounts}
                      label="accountName"
                      onChange={this.handleChange}
                      defaultValue={this.state.value}
                      {...this.domProps}
      />
    );
  }
}
export default AccountsDropDown;
