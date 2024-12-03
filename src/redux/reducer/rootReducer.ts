import { combineReducers } from "redux";
import userReducer from "../../feature/auth/reducer/userReducer";
import otpVerificationReducer from "../../feature/auth/reducer/otpVerificationReducer";
import tokenReducer from "../../../src/feature/home/reducer/tokenGenReducer";

export const rootReducer = combineReducers({
    otp: userReducer,
    otpVerification: otpVerificationReducer,
    tokenReducer: tokenReducer,
});

export default rootReducer;