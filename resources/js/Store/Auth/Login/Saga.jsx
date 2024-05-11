import {LOGIN_REQUEST, LOGOUT_REQUEST } from './actionTypes';
import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../Constant/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUserSuccess, loginUserFail } from './actions';
import { logoutUserSuccess, logoutUserFail } from './actions';
import setAccessToken from '../../../Constant/ApiHelper';

function* loginRequest({payload:payload, navigate:navigate}) {
    try {
        let response = yield call(api.auth.signin, payload);
        localStorage.setItem('token', JSON.stringify(response.token));
        localStorage.setItem('user', JSON.stringify(response.data));

        yield put(loginUserSuccess(response.data))
        setAccessToken();
        if (response.data.role == 'admin' || response.data.role == 'recruiter') {
            navigate(`/${response.data.role}/dashboard`);
        } else {
            navigate('/');
        }
        toast.success(response.message)
    } catch (error) {
        toast.error(error.response.data.message)
        yield put(loginUserFail(error))
    }
}

function* logoutRequest({navigate:navigate}) {
    try {
        // console.log("testing");
        let response = yield call(api.auth.logout);
        localStorage.clear();
        console.log(response,"response")
        navigate('/login');
        yield put(logoutUserSuccess());
    } catch (error) {
        console.log(error)
        yield put(logoutUserFail());
    }
}

function* auth() {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
    yield takeLatest(LOGOUT_REQUEST, logoutRequest);
}

export default auth;