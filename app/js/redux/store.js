import { createStore, applyMiddleware } from 'redux';
import appReducer from 'js/redux/reducers/appReducer';
import { asyncActions, logger } from 'js/redux/middleware';
import { loadState, saveState } from 'js/utils/utilities';
import throttle from 'lodash/throttle';

const middleware = [ asyncActions ];

// Add Logger middleware if not production
if (process.env.NODE_ENV !== 'production') { middleware.push(logger); }

const persistedState = loadState();

const store = createStore(
  // Reducers
  appReducer,
  // Persisted state
  persistedState,
  // Enhancers
  applyMiddleware(...middleware)
);

// Saving Redux state to local storage - we use lodash throttle to prevent saveState from being called too often
store.subscribe(throttle(() => {
  saveState({
    chanceOfRain: store.getState().chanceOfRain
  });
}, 1000));

export default store;
