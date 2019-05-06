import React, {Component} from 'react';
import moment from 'moment';

class DateField extends Component {
  constructor( props ) {
    super( props );

    this.dateFormat = 'YYYY-MM-DD';
    if ( props.selectedDate ) {
      this.originalDate = moment( props.selectedDate );
    } else {
      this.originalDate = moment();
    }

    this.state = {
      value: this.originalDate.clone().format( this.dateFormat )
    };

    this.domProps = { className: props.className };

    this.handleBlur = this.handleBlur.bind( this );
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    this.setState( {
      value: event.target.value
    } );

    if ( this.props.onChange ) this.props.onChange( event );
  }

  handleBlur( event ) {
    let nextDate = moment( event.target.value );
    this.setState( {
      value: nextDate.format( this.dateFormat )
    } );

    // Pass event handling along
    if ( this.props.onBlur ) this.props.onBlur( event );
  }

  render() {
    return (
      <input type="text"
             value={this.state.value}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             {...this.domProps} />
    );
  }
}

export default DateField;
