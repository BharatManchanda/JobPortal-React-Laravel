import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL} from './actionTypes';
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../Constant/Api';

function* loginRequest() {
    try {
        console.log(123);
        // let response = yield call(api.auth.login(payload));
    } catch (error) {
        
    }
}

function* logoutRequest() {

}

function* authSaga() {
    yield takeEvery(LOGIN_REQUEST, loginRequest);
    yield takeEvery(LOGOUT_REQUEST, logoutRequest);
}

export default authSaga;