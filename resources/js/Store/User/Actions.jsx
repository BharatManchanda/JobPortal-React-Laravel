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
} from './actionTypes'

export const getUsersRequest = (data) => ({
    type: GET_USERS_REQUEST,
    payload:data
});

export const getUsersSuccess = (data) => ({
    type: GET_USERS_SUCCESS,
    payload: data,
});

export const getUsersFail = (data) => ({
    type: GET_USERS_FAIL,
    payload: data,
});

export const createUsersRequest = (data) => ({
    type: CREATE_USERS_REQUEST,
    payload: data,
});

export const createUsersSuccess = (data) => ({
    type: CREATE_USERS_SUCCESS,
    payload: data,
});

export const createUsersFail = (data) => ({
    type: CREATE_USERS_FAIL,
    payload: data,
});

export const editUsersRequest = (data) => ({
    type: EDIT_USERS_REQUEST,
    payload: data,
});

export const editUsersSuccess = (data) => ({
    type: EDIT_USERS_SUCCESS,
    payload: data,
});

export const editUsersFail = (data) => ({
    type: EDIT_USERS_FAIL,
    payload: data,
});

export const deleteUsersRequest = (data) => ({
    type: DELETE_USERS_REQUEST,
    payload: data,
});

export const deleteUsersSuccess = (data) => ({
    type: DELETE_USERS_SUCCESS,
    payload: data,
});

export const deleteUsersFail = (data) => ({
    type: DELETE_USERS_FAIL,
    payload: data,
});

export const resetPasswordUsersRequest = (data) => ({
    type: RESET_PASSWORD_USERS_REQUEST,
    payload: data,
});

export const resetPasswordUsersSuccess = (data) => ({
    type: RESET_PASSWORD_USERS_SUCCESS,
    payload: data,
});

export const resetPasswordUsersFail = (data) => ({
    type: RESET_PASSWORD_USERS_FAIL,
    payload: data,
});