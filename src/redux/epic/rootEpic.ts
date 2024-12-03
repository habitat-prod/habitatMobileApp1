import { combineEpics } from "redux-observable";
import sendOtpEpic from "../../feature/auth/epic/sendOtpEpic";
import verifyOtpEpic from "../../feature/auth/epic/verifyOtpEpic";
import generateTokenEpic from "../../feature/home/epic/tokenGenEpic";

const rootEpic = combineEpics(sendOtpEpic, verifyOtpEpic, generateTokenEpic)

export default rootEpic;