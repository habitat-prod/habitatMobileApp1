import { ActionType, createAction } from "typesafe-actions";
import { IUserData } from "../model/login";
import { AuthActionTypes } from "../../../utils/constants";
  
  export interface ISendOtpActionData {
    phoneNumber: number;
    userType: string;
  }

  export interface ISendOtpSuccessActionData {
    sentOtp: boolean;
  }

  export interface ISendOtpFailureActionData {
    message: string;
    errorCode: number;
  }


export const sendOTP = createAction(AuthActionTypes.SEND_OTP_ACTION)<ISendOtpActionData>();
export const sendOtpSuccess = createAction(AuthActionTypes.SEND_OTP_SUCCESS_ACTION)<ISendOtpSuccessActionData>();
export const sendOtpFailure = createAction(AuthActionTypes.SEND_OTP_FAILURE_ACTION)<ISendOtpFailureActionData>();

export type sendOTPAction = ActionType<typeof sendOTP>;
type sendOtpSuccessAction = ActionType<typeof sendOtpSuccess>;
type sendOtpFailureAction = ActionType<typeof sendOtpFailure>;

export type loginActions = sendOTPAction | sendOtpSuccessAction | sendOtpFailureAction;