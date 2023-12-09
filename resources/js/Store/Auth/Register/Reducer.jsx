import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './actionTypes';

const initState = {
    loading: false,
};

export default function register(state = initState, action){
    switch(action.type){
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,    
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;

    }
}