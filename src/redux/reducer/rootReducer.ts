import { combineReducers } from "redux";
import userReducer from "../../feature/auth/reducer/userReducer";
import otpVerificationReducer from "../../feature/auth/reducer/otpVerificationReducer";
import tokenReducer from "../../../src/feature/home/reducer/tokenGenReducer";
import homeProfileReducer from "../../../src/feature/home/reducer/homeProfileReducer";

export const rootReducer = combineReducers({
    otp: userReducer,
    otpVerification: otpVerificationReducer,
    tokenReducer: tokenReducer,
    pmsReducer: homeProfileReducer,
});

export default rootReducer;