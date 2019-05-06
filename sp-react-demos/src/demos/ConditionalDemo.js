import React from 'react';

const ConditionalDemo = ( props ) => {
  return (
    <div>
      <h2>Example 1</h2>
      <ConditionalContainer condition="1 == 1"/>
      <h2>Example 2</h2>
      <ConditionalContainer condition="1 == 0"/>
    </div>
  );
};

export default ConditionalDemo;

const ConditionalContainer = ( props ) => {
  let results = null;

  // eslint-disable-next-line
  if ( Boolean( eval( props.condition ) ) ) {
    results = <TrueComponent/>;
  } else {
    results = <FalseComponent/>;
  }

  return (
    <div>
      <p>The results of testing <code>{props.condition}</code> are:</p>
      {results}
    </div>
  )
};

const TrueComponent = () => (
  <h3>True!</h3>
);

const FalseComponent = () => (
  <h3>False!</h3>
);
