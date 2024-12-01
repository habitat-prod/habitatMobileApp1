import { ActionType, createAction } from "typesafe-actions";
import { IUserData } from "../model/login";
import { AuthActionTypes } from "../../../utils/constants";

export interface IVerifyOtpActionData {
    otp: number;
    phoneNumber: number;
    userType:string;
  }

  export interface IVerifyOtpSuccessActionData {
    token:string;
    userDetails: IUserData[]; // list of userFlatDetails
  }

  // export interface IUpdateListSize {
  //   listSize:Number
  // }

  export interface IVerifyOtpFailureActionData {
    message: string;
    errorCode:number;
  }

export const verifyOtp = createAction(AuthActionTypes.VERIFY_OTP_ACTION)<IVerifyOtpActionData>();
export const verifyOtpSuccess = createAction(AuthActionTypes.VERIFY_OTP_SUCCESS_ACTION)<IVerifyOtpSuccessActionData>();
export const verifyOtpFailure = createAction(AuthActionTypes.VERIFY_OTP_FAILURE_ACTION)<IVerifyOtpFailureActionData>();
// export const updateListSize = createAction(AuthActionTypes.UPDATE_LIST_SIZE)<IUpdateListSize>();

export type verifyOtpAction = ActionType<typeof verifyOtp>;
type verifyOtpSuccessAction = ActionType<typeof verifyOtpSuccess>;
type verifyOtpFailureAction = ActionType<typeof verifyOtpFailure>;
// type updateListSizeAction = ActionType<typeof updateListSize>;

export type verifyOtpActions = verifyOtpAction | verifyOtpSuccessAction | verifyOtpFailureAction;

export { AuthActionTypes };