import {REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL} from './actionTypes';

const initState = {
    loading: false,
    message:{
        status:false,
        message:"Something wrong please refresh and try again!",
        display:false,
    }
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
                message:{
                    status: true,
                    message: "Api Hited Successfully!",
                    display: true,
                }
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                message:{
                    status: true,
                    message: action.payload,
                    display: true,
                }
            }
        default:
            return state;
    }
}