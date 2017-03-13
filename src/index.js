import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';
import Player from './containers/Player';

render(
  <Provider store={store}>
    <Player />
  </Provider>,
  document.getElementById('app')
);
