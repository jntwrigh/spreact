import React from 'react';

const TreeComponent = ( props ) => {
  let colors = ['red', 'orange', 'yellow',
    'green', 'blue', 'indigo', 'violet'];

  // You can get rid of one of these to break the snapshot
  let fruits = ['banana', 'apple', 'orange',
    'lemon', 'lime', 'pineapple', 'plum', 'pluot',
    'kiwi', 'dragonfruit'];

  function getColor(current) {
    return colors[(current) % 7];
  }

  return (
    <div>
      <ul>
        {
          fruits.map( (thing, count) => {
            return (
              <li key={count}
                  style={{color: getColor(count + 3)}}>
                {thing}
                </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default TreeComponent;
