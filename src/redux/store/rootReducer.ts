import { combineReducers } from "redux";
import userReducer from "../../feature/auth/reducer/userReducer";
import otpVerificationReducer from "../../feature/auth/reducer/otpVerificationReducer";

export const rootReducer = combineReducers({
    otp: userReducer,
    otpVerification: otpVerificationReducer
});

export default rootReducer;