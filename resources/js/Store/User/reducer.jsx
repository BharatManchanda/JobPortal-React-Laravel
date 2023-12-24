import React from 'react';
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
} from './actionTypes';

const initState = {
    loading:false,
    list:[],
    pagination:{
        current_page:0,
        last_page:0,
        per_page:0,
        total:0,
    }
}
export default function user(state = initState, action){
    switch (action.type) {
        case GET_USERS_REQUEST:
        case CREATE_USERS_REQUEST:
        case EDIT_USERS_REQUEST:
        case DELETE_USERS_REQUEST:
        case RESET_PASSWORD_USERS_REQUEST:
            return {
                ...state,
                loading:true,
            }

        case GET_USERS_FAIL:
        case CREATE_USERS_FAIL:
        case EDIT_USERS_FAIL:
        case DELETE_USERS_FAIL:
        case RESET_PASSWORD_USERS_FAIL:
            return {
                ...state,
                loading:false,
            }

        case GET_USERS_SUCCESS:
            let {data, current_page, last_page, per_page, total} = action.payload;
            return {
                ...state,
                loading:false,
                list:data,
                pagination:{
                    current_page: current_page,
                    last_page:last_page,
                    per_page:per_page,
                    total:total,
                }
            }
        case CREATE_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case EDIT_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case DELETE_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case RESET_PASSWORD_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        default:
            return state;
    }
}