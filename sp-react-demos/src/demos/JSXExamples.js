import React from 'react';

const JSXExamples = ( props ) => {
  let boundParam = 'Bar (bound)',
    sentence = ['a', 'bad', 'idea'],
    now = new Date(),
    canClick = (now.getUTCSeconds() % 2 ? 'clickable' : 'highlight');

  console.log( 'canClick is: ', canClick );

  return (
    <div>
      <ParamExample param="Foo"/>
      <ParamExample param={boundParam}/>
      <Styler>
        <h3>Styles and expressions:</h3>
        <ul style={{ marginTop: '35px' }}>
          <li>2 + 2 is {2 + 2}</li>
          <li className={canClick}>Concatenation is {sentence.join(' ')}</li>
        </ul>
      </Styler>
    </div>
  );
};

export default JSXExamples;

const ParamExample = ( props ) => {
  return (
    <h3>The parameter is {props.param}</h3>
  )
};

const Styler = ( props ) => {
  return (
    <div className="well">
      {props.children}
    </div>
  )
}