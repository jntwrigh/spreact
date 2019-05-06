import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';
import txApp from './tx/tx-reducers';

let store = createStore(txApp);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById( 'root' )
);
