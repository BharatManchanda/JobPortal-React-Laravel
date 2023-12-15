import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../Constant/Api";
import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './actionTypes';
import { registerSuccess, registerFail } from "./actions";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function* registerUser(action) {
    try {
        let response = yield call(api.auth.signup, action.payload);
        // yield put(registerSuccess(error.response.data.message));
        toast.success(response.message);
    } catch (error) {
        let message = error.response.data.message == undefined ? error.message : error.response.data.message ;
        yield put(registerFail(message));
        toast.error(message);
    }
}

function* registerSaga(){
    yield takeLatest(REGISTER_REQUEST, registerUser);
}

export default registerSaga;