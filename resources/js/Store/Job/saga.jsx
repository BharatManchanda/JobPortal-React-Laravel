import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import api from "../../Constant/Api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import {
    GET_JOB_LIST_REQUEST,
    GET_JOB_REQUEST,
    CREATE_JOB_REQUEST,
    UPDATE_JOB_REQUEST,
    DELETE_JOB_REQUEST,
} from "./actionTypes"

import {
    createJobFail,
    createJobSuccess,
    deleteJobFail,
    deleteJobSuccess,
    getJobFail,
    getJobListFail,
    getJobListSuccess,
    getJobSuccess,
    updateJobFail,
    updateJobSuccess
} from "./actions";

function* getJobListRequest ({payload:payload}) {
    try{
        let response = yield call(api.job.list, {...payload, page: 1 + payload.page});
        yield put(getJobListSuccess(response.list))
    } catch (error) {
        yield put(getJobListFail(error?.response?.data?.message));
        toast.error(error?.response?.data?.message);
    }
}

function* getJobRequest ({payload:payload}) {
    try{
        let response = yield call(api.job.get, payload);
        yield put(getJobSuccess(response.data))
    } catch (error) {
        yield put(getJobFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* createJobRequest ({payload:payload}) {
    try{
        let response = yield call(api.job.create, payload);
        yield put(createJobSuccess(response.data))
    } catch (error) {
        yield put(createJobFail(error?.response?.data?.message));
        toast.error(error?.response?.data?.message);
    }
}

function* updateJobRequest ({payload:payload}) {
    try{
        let response = yield call(api.job.update, {payload});
        yield put(updateJobSuccess(response.data))
    } catch (error) {
        yield put(updateJobFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

function* deleteJobRequest ({payload:payload}) {
    try{
        let response = yield call(api.job.delete, {payload});
        yield put(deleteJobSuccess(response.data))
    } catch (error) {
        yield put(deleteJobFail(error.response.data.message));
        toast.error(error.response.data.message);
    }
}

export default function* job() {
    yield takeLatest(GET_JOB_LIST_REQUEST, getJobListRequest)
    yield takeLatest(GET_JOB_REQUEST, getJobRequest)
    yield takeLatest(CREATE_JOB_REQUEST, createJobRequest)
    yield takeLatest(UPDATE_JOB_REQUEST, updateJobRequest)
    yield takeLatest(DELETE_JOB_REQUEST, deleteJobRequest)
}