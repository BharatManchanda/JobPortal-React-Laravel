import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    GET_MESSAGE_LIST_REQUEST,
    GET_MESSAGE_LIST_SUCCESS,
    GET_MESSAGE_LIST_FAIL,
    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAIL,
} from './actionType';

const initState = {
    loading:false,
    list:[],
}

export default function chat(state = initState, action) {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
        case GET_MESSAGE_LIST_REQUEST:
        case DELETE_MESSAGE_REQUEST:
            return {
                ...state,
                loading:true,
            }

        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case GET_MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case DELETE_MESSAGE_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case SEND_MESSAGE_FAIL:
        case GET_MESSAGE_LIST_FAIL:
        case DELETE_MESSAGE_FAIL:
            return {
                ...state,
                loading:false,
            }
    
        default:
            return state;
    }
}