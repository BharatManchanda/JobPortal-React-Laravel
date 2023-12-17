import { put, call, takeLatest } from "redux-saga/effects";
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    CREATE_USERS_REQUEST,
    CREATE_USERS_SUCCESS,
    CREATE_USERS_FAIL,
    EDIT_USERS_REQUEST,
    EDIT_USERS_SUCCESS,
    EDIT_USERS_FAIL,
    DELETE_USERS_REQUEST,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_FAIL,
    RESET_PASSWORD_USERS_REQUEST,
    RESET_PASSWORD_USERS_SUCCESS,
    RESET_PASSWORD_USERS_FAIL,
} from './actionTypes';
import api from "../../Constant/Api";

function* getUserRequest(data){
    let response = yield call(api.user.list, data);
    console.log(response);
}

function* createUserRequest(data){
}


function* editUserRequest(data){
    console.log('create User',data)
}

function* deleteUserRequest(data){
    console.log('create User',data)
}

function* resetPasswordUserRequest(data){
    console.log('create User',data)
}

export default function* user(){
    yield takeLatest(GET_USERS_REQUEST, getUserRequest);
    yield takeLatest(CREATE_USERS_REQUEST, createUserRequest);
    yield takeLatest(EDIT_USERS_REQUEST, editUserRequest);
    yield takeLatest(DELETE_USERS_REQUEST, deleteUserRequest);
    yield takeLatest(RESET_PASSWORD_USERS_REQUEST, resetPasswordUserRequest);
}