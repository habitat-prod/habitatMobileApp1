import { Reducer } from 'redux';

import { IErrorActionData } from '../../utils/error';
import { loginActions, AuthActionTypes } from '../actions/login';
// import { IUserData, LoginData, sendOTPData } from '../models/login';

export const defaultOTPTimeout = 30000;

export interface LoginState {
  sentOtp: boolean;
  otpTimeout: number;
  isSuccess: boolean;
  error?: IErrorActionData;
}

const initialLoginState: LoginState = {
  sentOtp: false,
  otpTimeout: defaultOTPTimeout,
  isSuccess: false,
  error: undefined,
};

const userReducer: Reducer<LoginState, loginActions> = (
  state = initialLoginState,
  action: loginActions,
): LoginState => {
  switch (action.type) { 
    case AuthActionTypes.SEND_OTP_ACTION:
      return {
        ...state,
        isSuccess: false,
        error: undefined,
        sentOtp: false,
      };
    case AuthActionTypes.SEND_OTP_SUCCESS_ACTION:
      return {
        ...state,
        sentOtp: action.payload.sentOtp,
        isSuccess: true,
        error: undefined,
      };
    case AuthActionTypes.SEND_OTP_FAILURE_ACTION:
      return {
        ...state,
        isSuccess: false,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
