import { combineEpics } from "redux-observable";
import sendOtpEpic from "../epics/login";
import verifyOtpEpic from "../epics/verifyOtpEpic";

const rootEpic = combineEpics(
    sendOtpEpic,
    verifyOtpEpic
);

export default rootEpic;