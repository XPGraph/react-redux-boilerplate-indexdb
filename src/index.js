import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.scss';
import { Provider } from 'react-redux';
import { reducer, middlewares, cache, composeEnhancers } from 'redux/store';
import { createStore, applyMiddleware } from 'redux';
import Routes from './app.routes';
import { enableBatch, resetStateReducer } from 'shared/utils';

cache.getAll().then(data => {
  // Then set up store
  const store = createStore(
    enableBatch(resetStateReducer(reducer)),
    data,
    // apply our middleware
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
  // Carry on as usual
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('root')
  );
});

registerServiceWorker();
