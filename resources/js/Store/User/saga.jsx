import { put, call, takeLatest } from "redux-saga/effects";
import {
    GET_USER_LIST_REQUEST,
    GET_USER_REQUEST,
    CREATE_USER_REQUEST,
    UPDATE_USER_REQUEST,
    DELETE_USER_REQUEST,
    RESET_PASSWORD_USERS_REQUEST,
    CHAT_USER_REQUEST,
} from './actionTypes';
import {
    getUserListSuccess,
    getUserListFail,
    createUserSuccess,
    createUserFail,
    getUserSuccess,
    getUserFail,
    updateUserSuccess,  
    updateUserFail,  
    deleteUserSuccess,
    deleteUserFail,
    chatUserSuccess,
    chatUserFail,
} from "./actions";
import api from "../../Constant/Api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function* getUserListRequest({payload:payload}){
    try {
        let response = yield call(api.user.list, {...payload, page: 1 + payload.page});
        yield put(getUserListSuccess(response.list));
    } catch (error) {
        yield put(getUserListFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* getUserRequest({payload:payload}){
    try {
        let response = yield call(api.user.get, payload);
        yield put(getUserSuccess(response.data))
    } catch (error) {
        yield put(getUserFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* createUserRequest({payload:payload}){
    try {
        let response = yield call(api.user.create, payload);
        yield put(createUserSuccess(response.data));
    } catch (error) {
        yield put(createUserFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* updateUserRequest({payload:payload}){
    try {
        let response = yield call(api.user.update, payload);
        yield put(updateUserSuccess(response.data));
        toast.success(response.message);
    } catch (error) {
        yield put(updateUserFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* deleteUserRequest({payload:payload}){
    try {
        let response = yield call(api.user.delete, payload);
        yield put(deleteUserSuccess(response.data));
        toast.success(response.message);
    } catch (error) {
        yield put(deleteUserFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* resetPasswordUserRequest(data){

}

function* chatUserRequest({payload:payload}){
    try {
        let response = yield call(api.user.chat, payload);
    } catch (error) {
        toast.error(error.message);
    }
}

export default function* user(){
    yield takeLatest(GET_USER_LIST_REQUEST, getUserListRequest);
    yield takeLatest(GET_USER_REQUEST, getUserRequest);
    yield takeLatest(CREATE_USER_REQUEST, createUserRequest);
    yield takeLatest(UPDATE_USER_REQUEST, updateUserRequest);
    yield takeLatest(DELETE_USER_REQUEST, deleteUserRequest);
    yield takeLatest(RESET_PASSWORD_USERS_REQUEST, resetPasswordUserRequest);
    yield takeLatest(CHAT_USER_REQUEST, chatUserRequest);
}