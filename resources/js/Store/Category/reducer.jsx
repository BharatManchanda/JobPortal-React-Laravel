import {
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    GET_CATEGORY_LIST_REQUEST,
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    UPDATE_STATUS_CHANGE_REQUEST,
    UPDATE_STATUS_CHANGE_SUCCESS,
    UPDATE_STATUS_CHANGE_FAIL,
} from './actionType';

const initState = {
    list: [],
    loading: false,
    pagination:{
        current_page:0,
        last_page:0,
        per_page:0,
        total:0,
    },
}

export default function category(state = initState, action) {
    switch (action.type) {
        case CREATE_CATEGORY_REQUEST:
        case UPDATE_CATEGORY_REQUEST:
        case GET_CATEGORY_LIST_REQUEST:
        case DELETE_CATEGORY_REQUEST:
        case UPDATE_STATUS_CHANGE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_CATEGORY_FAIL:
        case UPDATE_CATEGORY_FAIL:
        case GET_CATEGORY_LIST_FAIL:
        case DELETE_CATEGORY_FAIL:
        case UPDATE_STATUS_CHANGE_FAIL:
            return {
                ...state,
                loading: false,
            };

        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case GET_CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.data,
                loading: false,
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case UPDATE_STATUS_CHANGE_SUCCESS:
            return {
                ...state,
                loading: false,
                list: state.list.map(item => item.id === action.payload.data.id ? action.payload.data : item),
            }
        default:
            return state;
    }
}