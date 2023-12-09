import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL} from './actionTypes';

export const loginUserRequest = (payload) => {
    console.log(payload,'payload');
    return {
        action: LOGIN_REQUEST,
        payload: payload,
    }
}

export const loginUserSuccess = (payload) => ({
    action: LOGIN_SUCCESS,
    payload: payload,
});

export const loginUserFail = (payload) => ({
    action: LOGIN_FAIL,
    payload: payload,
});

export const logoutUserRequest = (payload) => ({
    action: LOGOUT_REQUEST,
    payload: payload,
});

export const logoutUserSuccess = (payload) => ({
    action: LOGOUT_SUCCESS,
    payload: payload,
});

export const logoutUserFail = (payload) => ({
    action: LOGOUT_FAIL,
    payload: payload,
});