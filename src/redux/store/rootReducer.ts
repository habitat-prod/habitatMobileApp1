import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer";

export const rootReducer = combineReducers({
    login: userReducer,
});

// export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;