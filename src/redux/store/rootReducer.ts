import { combineReducers } from "redux";
import LoginReducer from "../reducer/userReducer";

export const rootReducer = combineReducers({
    LoginReducer,
});

export type rootState = ReturnType<typeof rootReducer>;