import React from 'react';

function CurrencyFormatter( props ) {
  let val = Number( props.value ),
    color = '',
    currencyStyle = {};

  if ( !isNaN( val ) ) {
    color = (val < 0 ? 'red' : 'green');

    if (props.nosign) val = Math.abs(val);

    val = val.toLocaleString( 'en-US', { style: 'currency', currency: 'USD' } );
  } else {
    color = 'yellow'
  }

  if ( props.colors ) currencyStyle = { color: color };

  return (
    <span style={currencyStyle}>{val}</span>
  );
}

export default CurrencyFormatter;
