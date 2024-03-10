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
}

export default function job(state=initState, action) {
    switch (action.type) {

        case GET_JOB_LIST_REQUEST:
        case GET_JOB_REQUEST:
        case CREATE_JOB_REQUEST:
        case UPDATE_JOB_REQUEST:
        case DELETE_JOB_REQUEST:
            return {
                ...state,
                loading:true,
            };
            
        case GET_JOB_LIST_FAIL:
        case GET_JOB_FAIL:
        case CREATE_JOB_FAIL:
        case UPDATE_JOB_FAIL:
        case DELETE_JOB_FAIL:
            return {
                ...state,
                loading:false,
            };

        case GET_JOB_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
            };
        case GET_JOB_SUCCESS:
            return {
                ...state,
                loading:false,
            };
        case CREATE_JOB_SUCCESS:
            return {
                ...state,
                loading:false,
            };
        case UPDATE_JOB_SUCCESS:
            return {
                ...state,
                loading:false,
            };
        case DELETE_JOB_SUCCESS:
            return {
                ...state,
                loading:false,
            };

        default:
            return state;
        }
}