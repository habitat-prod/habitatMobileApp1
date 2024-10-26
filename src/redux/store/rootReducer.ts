import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer";
import otpVerificationReducer from "../reducer/otpVerificationReducer";

export const rootReducer = combineReducers({
    otp: userReducer,
    otpVerification: otpVerificationReducer
});

// export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;