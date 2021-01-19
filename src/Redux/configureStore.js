import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import globalStatereducer from "./ducks/GlobalData";
import { watcherSaga } from "./sagas/rootsaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  globalState: globalStatereducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
