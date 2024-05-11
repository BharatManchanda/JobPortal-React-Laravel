import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import api from "../../Constant/Api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {
    SEND_MESSAGE_REQUEST,
    GET_MESSAGE_LIST_REQUEST,
    DELETE_MESSAGE_REQUEST,
} from './actionType';

function* getMessageList() {
    try {
        let response = yield call(api.chat.list);
        console.log(response,"response");
    } catch (error) {
        
    }
}

function* sendMessage() {
    try {
        
    } catch (error) {
        
    }
}

function* deleteMessage() {
    try {
        
    } catch (error) {
        
    }
}

export default function* chat() {
    yield takeLatest(SEND_MESSAGE_REQUEST, getMessageList);
    yield takeLatest(GET_MESSAGE_LIST_REQUEST, sendMessage);
    yield takeLatest(DELETE_MESSAGE_REQUEST, deleteMessage);
}