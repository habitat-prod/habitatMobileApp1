import { combineReducers } from "redux";
import userReducer from "../../feature/auth/reducer/userReducer";
import otpVerificationReducer from "../../feature/auth/reducer/otpVerificationReducer";
import tokenReducer from "../../../src/feature/home/reducer/tokenGenReducer";
import homeProfileReducer from "../../../src/feature/home/reducer/homeProfileReducer";
import maintenanceReducer from "../../../src/feature/maintaineceAreas/reducers/maintenanceReducer";
import amenityProblemReducer from "../../../src/feature/maintaineceAreas/reducers/amenityProblemReducer";
import generateEntryReducer from "../../../src/feature/securityApprovals/reducer/generateEntryReducer";
import securityApprovalReducer from "../../../src/feature/securityApprovals/reducer/securityApprovalReducer";
import addResidentReducer from "../../../src/feature/settings/reducer/addResidentReducer";
import maintenanceReportReducer from "../../../src/feature/maintaineceAreas/reducers/maintenanceReportReducer";

export const rootReducer = combineReducers({
    otp: userReducer,
    otpVerification: otpVerificationReducer,
    tokenReducer: tokenReducer,
    pmsReducer: homeProfileReducer,
    maintenanceReducer: maintenanceReducer,
    amenityProblemReducer: amenityProblemReducer,
    generateEntryReducer: generateEntryReducer,
    securityApprovalReducer: securityApprovalReducer,
    addResidentReducer: addResidentReducer,
    maintenanceReportReducer: maintenanceReportReducer,
});

export default rootReducer;