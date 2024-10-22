import { ActionType, createAction } from "typesafe-actions";
import { IUserData, LoginData } from "../models/login";

export enum AuthActionTypes {
    SEND_OTP_ACTION = 'SEND_OTP_ACTION',
    SEND_OTP_SUCCESS_ACTION = 'SEND_OTP_SUCCESS_ACTION',
    SEND_OTP_FAILURE_ACTION = 'SEND_OTP_FAILURE_ACTION',
    VERIFY_OTP_ACTION = 'VERIFY_OTP_ACTION',
    VERIFY_OTP_SUCCESS_ACTION = 'VERIFY_OTP_SUCCESS_ACTION',
    VERIFY_OTP_FAILURE_ACTION = 'VERIFY_OTP_FAILURE_ACTION',
  }
  
  export interface ISendOtpActionData {
    phoneNumber: number;
    userType: string;
  }
  
  export interface IVerifyOtpActionData {
    otp: number;
    phoneNumber: number;
    userType:string;
  }

  export interface ISendOtpSuccessActionData {
    sentOtp: boolean;
  }

  export interface IVerifyOtpSuccessActionData {
    token:string;
    userDetails: IUserData
  }

  export interface ISendOtpFailureActionData {
    message: string;
    errorCode: number;
  }

  export interface IVerifyOtpFailureActionData {
    message: string;
    errorCode:number;
  }

export const sendOTP = createAction(AuthActionTypes.SEND_OTP_ACTION)<ISendOtpActionData>();
export const sendOtpSuccess = createAction(AuthActionTypes.SEND_OTP_SUCCESS_ACTION)<ISendOtpSuccessActionData>();
export const sendOtpFailure = createAction(AuthActionTypes.SEND_OTP_FAILURE_ACTION)<ISendOtpFailureActionData>();
export const verifyOtp = createAction(AuthActionTypes.VERIFY_OTP_ACTION)<IVerifyOtpActionData>();
export const verifyOtpSuccess = createAction(AuthActionTypes.VERIFY_OTP_SUCCESS_ACTION)<IVerifyOtpSuccessActionData>();
export const verifyOtpFailure = createAction(AuthActionTypes.VERIFY_OTP_FAILURE_ACTION)<IVerifyOtpFailureActionData>();

// export type loginAction = ActionType<typeof login>;
// type loginSuccessAction = ActionType<typeof loginSuccess>;
// type loginFailureAction = ActionType<typeof loginFailure>;
// type loginResetAction = ActionType<typeof loginReset>;

export type sendOTPAction = ActionType<typeof sendOTP>;
type sendOtpSuccessAction = ActionType<typeof sendOtpSuccess>;
type sendOtpFailureAction = ActionType<typeof sendOtpFailure>;

type verifyOtpAction = ActionType<typeof verifyOtp>;
type verifyOtpSuccessAction = ActionType<typeof verifyOtpSuccess>;
type verifyOtpFailureAction = ActionType<typeof verifyOtpFailure>;

export type loginActions = sendOTPAction | sendOtpSuccessAction | sendOtpFailureAction | verifyOtpAction | verifyOtpSuccessAction | verifyOtpFailureAction;
  
//   export const sendOtp = createAction(AuthActionTypes.SEND_OTP_ACTION)<ISendOtpActionData>();
//   export const verifyOtp = createAction(AuthActionTypes.VERIFY_OTP_ACTION)<IVerifyOtpActionData>();