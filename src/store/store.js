import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import config from 'constants/config';
import createRootReducer from 'store/rootReducer';

const composeEnhancers = typeof window === 'object'
// eslint-disable-next-line no-underscore-dangle
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // eslint-disable-next-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const middlewares = [
  thunk,
];

export const history = createBrowserHistory();

/**
 * Start logger only on dev environment
 */
if (config.isDev) {
  middlewares.push(logger);
}

const store = createStore(
  createRootReducer(history),
  {},
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      ...middlewares,
    ),
  ),
);

if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    const createRootReducerHot = require('./rootReducer').default;
    store.replaceReducer(createRootReducerHot(history));
  });
}

export default store;
