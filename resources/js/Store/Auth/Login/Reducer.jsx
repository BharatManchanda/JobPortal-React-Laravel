import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL} from './actionTypes';

const initState = {
    loading: false,
    isLogin:false,
};

export default function login(state = initState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return{
                ...state,
                loading: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case LOGOUT_SUCCESS:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
