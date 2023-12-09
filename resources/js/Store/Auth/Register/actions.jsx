import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from './actionTypes';

export const registerRequest = (payload) => ({
    type: REGISTER_REQUEST,
    payload: payload
});

export const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload: payload
});

export const registerFail = (payload) => ({
    type: REGISTER_FAIL,
    payload: payload
});