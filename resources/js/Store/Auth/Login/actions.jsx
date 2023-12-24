import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from './actionTypes';

export const loginUserRequest = (payload, navigate) => {
    console.log(payload,'payload');
    return {
        type: LOGIN_REQUEST,
        payload: payload,
        navigate: navigate,
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

export const logoutUserRequest = (navigate) => ({
    type: LOGOUT_REQUEST,
    navigate: navigate,
});

export const logoutUserSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutUserFail = (payload) => ({
    type: LOGOUT_FAIL,
    payload: payload,
});