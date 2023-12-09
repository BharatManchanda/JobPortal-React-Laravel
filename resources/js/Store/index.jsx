import { createStore } from "redux";
import rootReducers from "./reducers";
import { applyMiddleware } from "redux";
// import { SagaMiddleware } from "redux-saga";
import createSagaMiddleware from 'redux-saga';
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagas);
export default store;