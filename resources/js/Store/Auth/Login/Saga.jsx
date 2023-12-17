import {LOGIN_REQUEST, LOGOUT_REQUEST } from './actionTypes';
import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../Constant/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUserSuccess, loginUserFail } from './actions';
import setAccessToken from '../../../Constant/ApiHelper';

function* loginRequest({payload:payload}) {
    try {
        let response = yield call(api.auth.signin, payload);
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('user', JSON.stringify(response.data));
        yield put(loginUserSuccess(response.data))
        setAccessToken();
        toast.success(response.message)
    } catch (error) {
        toast.error(error.message)
        yield put(loginUserFail(error))
    }
}

function* logoutRequest() {

}

function* auth() {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
    yield takeLatest(LOGOUT_REQUEST, logoutRequest);
}

export default auth;