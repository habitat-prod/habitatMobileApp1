import { combineEpics } from "redux-observable";
import sendOtpEpic from "../../feature/auth/epic/sendOtpEpic";
import verifyOtpEpic from "../../feature/auth/epic/verifyOtpEpic";
import generateTokenEpic from "../../feature/home/epic/tokenGenEpic";
import fetchHomeProfileDataEpic from "../../feature/home/epic/homeProfileEpic";
import fetchMaintenanceDataEpic from "../../feature/maintaineceAreas/epic/maintenanceEpic";

const rootEpic = combineEpics(sendOtpEpic, verifyOtpEpic, generateTokenEpic, fetchHomeProfileDataEpic, fetchMaintenanceDataEpic);

export default rootEpic;