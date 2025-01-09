import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
// import postReducer from "./PostReducer";
// import chatReducer from "./ChatUserReducer";
import profileReducer from "./profileReducer";
export const reducers = combineReducers({authReducer, profileReducer})