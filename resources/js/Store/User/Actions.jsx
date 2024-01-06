import {
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USERS_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    RESET_PASSWORD_USERS_REQUEST,
    RESET_PASSWORD_USERS_SUCCESS,
    RESET_PASSWORD_USERS_FAIL,
    CHAT_USER_REQUEST,
    CHAT_USER_SUCCESS,
    CHAT_USER_FAIL,
} from './actionTypes'

export const getUserListRequest = (data) => ({
    type: GET_USER_LIST_REQUEST,
    payload:data
});

export const getUserListSuccess = (data) => ({
    type: GET_USER_LIST_SUCCESS,
    payload: data,
});

export const getUserListFail = (data) => ({
    type: GET_USER_LIST_FAIL,
    payload: data,
});

export const getUserRequest = (data) => ({
    type: GET_USER_REQUEST,
    payload: data,
});

export const getUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    payload: data,
});

export const getUserFail = (data) => ({
    type: GET_USER_FAIL,
    payload: data,
});

export const createUsersRequest = (data) => ({
    type: CREATE_USER_REQUEST,
    payload: data,
});

export const createUserSuccess = (data) => ({
    type: CREATE_USER_SUCCESS,
    payload: data,
});

export const createUserFail = (data) => ({
    type: CREATE_USERS_FAIL,
    payload: data,
});

export const UpdateUserRequest = (data) => ({
    type: UPDATE_USER_REQUEST,
    payload: data,
});

export const updateUserSuccess = (data) => ({
    type: UPDATE_USER_SUCCESS,
    payload: data,
});

export const updateUserFail = (data) => ({
    type: UPDATE_USER_FAIL,
    payload: data,
});

export const deleteUserRequest = (data) => ({
    type: DELETE_USER_REQUEST,
    payload: data,
});

export const deleteUserSuccess = (data) => ({
    type: DELETE_USER_SUCCESS,
    payload: data,
});

export const deleteUserFail = (data) => ({
    type: DELETE_USER_FAIL,
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

export const chatUserRequest = (data) => ({
    type: CHAT_USER_REQUEST,
    payload: data,
});

export const chatUserSuccess = (data) => ({
    type: CHAT_USER_SUCCESS,
    payload: data,
});

export const chatUserFail = (data) => ({
    type: CHAT_USER_FAIL,
    payload: data,
});