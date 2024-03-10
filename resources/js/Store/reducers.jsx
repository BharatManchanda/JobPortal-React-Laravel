import login from "./Auth/Login/Reducer";
import register from "./Auth/Register/Reducer";
import user from "./User/reducer";
import { combineReducers } from "redux";
import job from './Job/reducer'

const rootReducers = combineReducers({
    login,
    register,
    user,
    job,
});
export default rootReducers;