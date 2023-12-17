import login from "./Auth/Login/Reducer";
import register from "./Auth/Register/Reducer";
import user from "./User/reducer";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    login,
    register,
    user,
});
export default rootReducers;