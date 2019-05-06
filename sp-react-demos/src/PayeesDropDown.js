import React, {Component} from 'react';
import {payeesDAO} from './data/class-data';
import CustomDropDown from './CustomDropDown';

class PayeesDropDown extends Component {
  constructor( props ) {
    super( props );
    this.payees = payeesDAO.list();

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind( this );

    this.domProps = {
      name       : props.name,
      className  : props.className,
      placeholder: props.placeholder || 'Select a payee'
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
      <CustomDropDown options={this.payees}
                      label="payeeName"
                      onChange={this.handleChange}
                      defaultValue={this.state.value}
                      {...this.domProps}
      />
    );
  }
}
export default PayeesDropDown;
