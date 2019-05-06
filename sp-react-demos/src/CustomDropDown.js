import React, {Component} from 'react';

class CustomDropDown extends Component {
  constructor( props ) {
    super( props );

    this.idField = props.idField || 'id';

    let defaultValue = props.defaultValue || props.value || '';
    this.placeholder = props.placeholder || 'Please select an item below';

    this.state = {
      value: defaultValue,
    };

    this.domProps = {
      className: props.className,
      name     : props.name,
      onChange : props.onChange,
    };

    this.handleChange = this.handleChange.bind( this );
  }

  getLabel( option, label ) {
    let labels = label.split( /\s+/ );
    return labels.map( label => option[ label ] ).join( ' ' );
  }

  handleChange( event ) {
    this.setState( { value: event.target.value } );
    if ( this.props.onChange ) this.props.onChange( event );
  }

  render() {
    return (
      <select {...this.domProps} onChange={this.handleChange} value={this.state.value}>
        <option value="">{this.placeholder}</option>
        {this.props.options.map( ( option, index ) => (
          <option value={option[ this.idField ]} key={index}>{this.getLabel( option, this.props.label )}</option>
        ) )}
      </select>
    );
  }
}

export default CustomDropDown;
