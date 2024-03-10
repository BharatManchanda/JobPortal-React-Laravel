import {
    GET_JOB_LIST_REQUEST,
    GET_JOB_LIST_SUCCESS,
    GET_JOB_LIST_FAIL,
    GET_JOB_REQUEST,
    GET_JOB_SUCCESS,
    GET_JOB_FAIL,
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,
    UPDATE_JOB_REQUEST,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
 } from "./actionTypes"

export const getJobListRequest = (data) => ({
    type: GET_JOB_LIST_REQUEST,
    payload: data,
});

export const getJobListSuccess = (data) => ({
    type: GET_JOB_LIST_SUCCESS,
    payload: data,
});

export const getJobListFail = (data) => ({
    type: GET_JOB_LIST_FAIL,
    payload: data,
});

export const getJobRequest = (data) => ({
    type: GET_JOB_REQUEST,
    payload: data,
});

export const getJobSuccess = (data) => ({
    type: GET_JOB_SUCCESS,
    payload: data,
});

export const getJobFail = (data) => ({
    type: GET_JOB_FAIL,
    payload: data,
});

export const createJobRequest = (data) => ({
    type: CREATE_JOB_REQUEST,
    payload: data,
});

export const createJobSuccess = (data) => ({
    type: CREATE_JOB_SUCCESS,
    payload: data,
});

export const createJobFail = (data) => ({
    type: CREATE_JOB_FAIL,
    payload: data,
});

export const updateJobRequest = (data) => ({
    type: UPDATE_JOB_REQUEST,
    payload: data,
});

export const updateJobSuccess = (data) => ({
    type: UPDATE_JOB_SUCCESS,
    payload: data,
});

export const updateJobFail = (data) => ({
    type: UPDATE_JOB_FAIL,
    payload: data,
});

export const deleteJobRequest = (data) => ({
    type: DELETE_JOB_REQUEST,
    payload: data,
});

export const deleteJobSuccess = (data) => ({
    type: DELETE_JOB_SUCCESS,
    payload: data,
});

export const deleteJobFail = (data) => ({
    type: DELETE_JOB_FAIL,
    payload: data,
});