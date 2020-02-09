import newsReducer from "./reducers/news";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchNews } from "./sagas/index";

// Interface
const rootReducer = combineReducers({
  news: newsReducer
});

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

// const middleware = [];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
  // applyMiddleware(...middleware)
);

sagaMiddleware.run(watchNews);

export default store;
