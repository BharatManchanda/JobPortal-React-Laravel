import login from "./Auth/Login/Reducer";
import register from "./Auth/Register/Reducer";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    login,
    register,
});
export default rootReducers;