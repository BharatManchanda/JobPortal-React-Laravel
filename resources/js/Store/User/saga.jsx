import { put, call, takeLatest } from "redux-saga/effects";
import {
    GET_USERS_REQUEST,
    CREATE_USERS_REQUEST,
    EDIT_USERS_REQUEST,
    DELETE_USERS_REQUEST,
    RESET_PASSWORD_USERS_REQUEST,
} from './actionTypes';
import { getUsersSuccess, getUsersFail  } from "./actions";
import api from "../../Constant/Api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function* getUserRequest({payload:payload}){
    try {
        let response = yield call(api.user.list, payload);
        yield put(getUsersSuccess(response.list));
    } catch (error) {
        yield put(getUsersFail(error.message));
        toast.error(error.message);
    }
}

function* createUserRequest({payload:payload}){
    console.log(payload);
}


function* editUserRequest(data){
}

function* deleteUserRequest(data){
}

function* resetPasswordUserRequest(data){
}

export default function* user(){
    yield takeLatest(GET_USERS_REQUEST, getUserRequest);
    yield takeLatest(CREATE_USERS_REQUEST, createUserRequest);
    yield takeLatest(EDIT_USERS_REQUEST, editUserRequest);
    yield takeLatest(DELETE_USERS_REQUEST, deleteUserRequest);
    yield takeLatest(RESET_PASSWORD_USERS_REQUEST, resetPasswordUserRequest);
}