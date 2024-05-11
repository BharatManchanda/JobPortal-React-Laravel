import login from "./Auth/Login/Reducer";
import register from "./Auth/Register/Reducer";
import user from "./User/reducer";
import { combineReducers } from "redux";
import job from './Job/reducer'
import chat from "./Chat/reducer";

const rootReducers = combineReducers({
    login,
    register,
    user,
    job,
    chat,
});
export default rootReducers;