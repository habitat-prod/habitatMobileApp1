import { combineReducers } from "redux";
import userReducer from "../../feature/auth/reducer/userReducer";
import otpVerificationReducer from "../../feature/auth/reducer/otpVerificationReducer";
import tokenReducer from "../../../src/feature/home/reducer/tokenGenReducer";
import homeProfileReducer from "../../../src/feature/home/reducer/homeProfileReducer";
import maintenanceReducer from "../../../src/feature/maintaineceAreas/reducers/maintenanceReducer";
import amenityProblemReducer from "../../../src/feature/maintaineceAreas/reducers/amenityProblemReducer";
import generateEntryReducer from "../../../src/feature/securityApprovals/reducer/generateEntryReducer";

export const rootReducer = combineReducers({
    otp: userReducer,
    otpVerification: otpVerificationReducer,
    tokenReducer: tokenReducer,
    pmsReducer: homeProfileReducer,
    maintenanceReducer: maintenanceReducer,
    amenityProblemReducer: amenityProblemReducer,
    generateEntryReducer: generateEntryReducer,
});

export default rootReducer;