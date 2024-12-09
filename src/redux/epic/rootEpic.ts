import { combineEpics } from "redux-observable";
import sendOtpEpic from "../../feature/auth/epic/sendOtpEpic";
import verifyOtpEpic from "../../feature/auth/epic/verifyOtpEpic";
import generateTokenEpic from "../../feature/home/epic/tokenGenEpic";
import fetchHomeProfileDataEpic from "../../feature/home/epic/homeProfileEpic";

const rootEpic = combineEpics(sendOtpEpic, verifyOtpEpic, generateTokenEpic, fetchHomeProfileDataEpic);

export default rootEpic;