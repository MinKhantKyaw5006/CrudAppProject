import { combineReducers } from "redux";

import authReducer from "./authReducers";
import postReducer from "./postReducter";

export const reducers = combineReducers({authReducer, postReducer})