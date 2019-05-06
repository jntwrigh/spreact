import React, {Component} from 'react';
import {staticData} from '../../data/class-data';
import CustomDropDown from '../CustomDropDown';

class TxTypesDropDown extends Component {
  constructor( props ) {
    super( props );
    this.staticData = { ...staticData };

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind( this );

    this.domProps = {
      name       : props.name,
      className  : props.className,
      placeholder: props.placeholder || 'Select a tx type'
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
      <CustomDropDown options={this.staticData.txTypes}
                      label="typeName"
                      onChange={this.handleChange}
                      defaultValue={this.state.value}
                      {...this.domProps}
      />
    );
  }
}
export default TxTypesDropDown;
