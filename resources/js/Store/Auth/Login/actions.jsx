import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL} from './actionTypes';

export const loginUserRequest = (payload) => {
    console.log(payload,'payload');
    return {
        type: LOGIN_REQUEST,
        payload: payload,
    }
}

export const loginUserSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload,
});

export const loginUserFail = (payload) => ({
    type: LOGIN_FAIL,
    payload: payload,
});

export const logoutUserRequest = (payload) => ({
    type: LOGOUT_REQUEST,
    payload: payload,
});

export const logoutUserSuccess = (payload) => ({
    type: LOGOUT_SUCCESS,
    payload: payload,
});

export const logoutUserFail = (payload) => ({
    type: LOGOUT_FAIL,
    payload: payload,
});