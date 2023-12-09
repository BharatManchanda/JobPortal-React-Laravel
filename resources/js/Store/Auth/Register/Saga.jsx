import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import api from "../../../Constant/Api";
import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './actionTypes';
import { registerSuccess } from "./actions";
function* registerUser(action) {
    try {
        
    } catch (error) {
        
    }
}

function* registerSaga(){
    yield takeLatest(REGISTER_REQUEST, registerUser);
}

export default registerSaga;