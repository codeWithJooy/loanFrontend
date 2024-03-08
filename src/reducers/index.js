import {combineReducers} from "redux"

import userReducer from "./userReducers";
import toastReducer from "./toastReducer";

const rootReducer=combineReducers({
    user:userReducer,
    toast:toastReducer,
})

export default rootReducer;