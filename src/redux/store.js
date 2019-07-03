import { compose } from 'redux';
import reducer from 'redux/reducers';
import thunk from 'redux-thunk';
// import persistState from 'redux-localstorage';

import getPersistMiddleware from 'redux-persist-middleware';
import { getConfiguredCache } from 'money-clip';
import ms from 'milliseconds';

import {
  batch,
} from 'shared';

const isDevelopment = process.env.NODE_ENV === 'development';
const composeEnhancers = isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose : compose;

// Here we use the money-clip library to
// creates an object of cache functions with
// these options pre-applied
const cache = getConfiguredCache({
  version: 1,
  maxAge: ms.days(30),
});

// A mapping of actions to reducers we should
// persist after those actions occur
const actionMap = {
  INC_STORE: ['incValue'],
};

// Configure our middleware
const persistMiddleware = getPersistMiddleware({
  // a function to call to persist stuff.
  // This *must* return a Promise and
  // *must take two arguments: (key, value)*
  cacheFn: cache.set,
  // optionally logs out which action triggered
  // something to be cached and what reducers
  // were persisted as a result.
  logger: console.info,
  // We pass in the mapping of action types to
  // reducers that should be persisted
  actionMap,
});

const middlewares = [
  thunk,
  batch,
  persistMiddleware,
];

export {
  middlewares,
  reducer,
  cache,
  composeEnhancers
};

// export const store = createStore(
//   enableBatch(resetStateReducer(reducer)),
//   initState,
//   composeEnhancers(
//     applyMiddleware(...middlewares),
//     // persistState(Object.keys(initState), {
//     //   key: 'state',
//     //   slicer: (paths) => (state) =>
//     //     paths.reduce((serialized, path) => ({
//     //       ...serialized,
//     //       [path]: state[path],
//     //     }), {}),
//     // })
//   )
// );
