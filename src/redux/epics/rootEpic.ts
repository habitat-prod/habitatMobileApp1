import { combineEpics } from "redux-observable";
import sendOtpEpic from "../../feature/auth/epic/login";
import verifyOtpEpic from "../../feature/auth/epic/verifyOtpEpic";

const rootEpic = combineEpics(sendOtpEpic, verifyOtpEpic)

export default rootEpic;