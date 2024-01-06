import React from 'react';
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
} from './actionTypes';

const initState = {
    loading:false,
    list:[],
    pagination:{
        current_page:0,
        last_page:0,
        per_page:0,
        total:0,
    },
    data:{},
    chatMessage:[],
}
export default function user(state = initState, action){
    switch (action.type) {
        case GET_USER_LIST_REQUEST:
        case GET_USER_REQUEST:
        case CREATE_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
        case RESET_PASSWORD_USERS_REQUEST:
        case CHAT_USER_REQUEST:
            return {
                ...state,
                loading:true,
            }

        case GET_USER_LIST_FAIL:
        case GET_USER_FAIL:
        case CREATE_USERS_FAIL:
        case UPDATE_USER_FAIL:
        case DELETE_USER_FAIL:
        case RESET_PASSWORD_USERS_FAIL:
        case CHAT_USER_FAIL:
            return {
                ...state,
                loading:false,
            }

        case GET_USER_LIST_SUCCESS:
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
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                list:[...state.list, action.payload],
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload,
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case RESET_PASSWORD_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case CHAT_USER_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        default:
            return state;
    }
}