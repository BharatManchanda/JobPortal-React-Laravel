import {fork, all} from 'redux-saga/effects';
import authSaga from './Auth/Login/Saga';
import registerSaga from './Auth/Register/Saga';
export default function* sagas() {
    yield all([
        fork(authSaga),
        fork(registerSaga),
    ]);
}