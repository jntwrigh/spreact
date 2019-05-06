import React, {Component} from 'react';
import {categoriesDAO} from './data/class-data';
import CustomDropDown from './CustomDropDown';

class CategoriesDropDown extends Component {
  constructor( props ) {
    super( props );
    this.categories = categoriesDAO.list();

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind( this );

    this.domProps = {
      name       : props.name,
      className  : props.className,
      placeholder: props.placeholder || 'Select a category'
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
      <CustomDropDown options={this.categories}
                      label="categoryName"
                      onChange={this.handleChange}
                      defaultValue={this.state.value}
                      {...this.domProps}
      />
    );
  }
}
export default CategoriesDropDown;
