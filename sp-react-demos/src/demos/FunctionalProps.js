import React from 'react';

const FunctionalProps = ( props ) => {
  return (
    <div>
      <h3>Functional properties</h3>
      <div>General properties: {JSON.stringify(props)}</div>
      <div>A specific property: {props.name}</div>
    </div>
  );
}

export default FunctionalProps;
