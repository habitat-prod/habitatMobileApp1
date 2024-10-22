import { combineEpics } from "redux-observable";
import sendOtpEpic from "../epics/login";

const rootEpic = combineEpics(
    sendOtpEpic,
);

export default rootEpic;