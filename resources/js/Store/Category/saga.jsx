import { call, put, takeLatest } from "redux-saga/effects";
import {
    CREATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_REQUEST,
    GET_CATEGORY_LIST_REQUEST,
    DELETE_CATEGORY_REQUEST,
    UPDATE_STATUS_CHANGE_REQUEST,
} from './actionType';
import api from "../../Constant/Api";

import {
    getCategoryListFail,
    getCategoryListSuccess,
    updateStatusChangeFail,
    updateStatusChangeSuccess
} from "./actions";
 

function* createCategory() {
    try {
        let response = yield call(api.category.create);
    } catch (error) {
    }
}

function* updateCategory() {
    let response = yield call(api.category.list);
    console.log(response,"response")
}

function* getCategoryList() {
    try {
        let response = yield call(api.category.list);
        yield put(getCategoryListSuccess(response.list))
    } catch (error) {
        yield put(getCategoryListFail(response.list))
        console.log(error,"error");
    }
}

function* deleteCategory() {

}

function* updateCategoryStatus({payload:payload}) {
    try {
        console.log(payload);
        let response = yield call(api.category.updateStatus, payload);
        yield put(updateStatusChangeSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(updateStatusChangeFail());
    }
}

export default function* category() {
    yield takeLatest(CREATE_CATEGORY_REQUEST, createCategory);
    yield takeLatest(UPDATE_CATEGORY_REQUEST, updateCategory);
    yield takeLatest(GET_CATEGORY_LIST_REQUEST, getCategoryList);
    yield takeLatest(DELETE_CATEGORY_REQUEST, deleteCategory);
    yield takeLatest(UPDATE_STATUS_CHANGE_REQUEST, updateCategoryStatus);
}