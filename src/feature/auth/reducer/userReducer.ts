import { Reducer } from 'redux';
import { IErrorActionData } from '../../../utils/error';
import { loginActions } from '../action/login';
import { AuthActionTypes } from '../../../utils/constants';


export const defaultOTPTimeout = 30000;

export interface OtpState {
  sentOtp: boolean;          
  otpTimeout: number;        
  isLoading: boolean;
  isSuccess: boolean;        
  error?: IErrorActionData; 
}

const initialOtpState: OtpState = {
  sentOtp: false,         
  otpTimeout: defaultOTPTimeout, 
  isLoading: false,
  isSuccess: false,        
  error: undefined,       
};

const userReducer: Reducer<OtpState, loginActions> = (
  state = initialOtpState,
  action: loginActions,
): OtpState => {
  switch (action.type) {
    case AuthActionTypes.SEND_OTP_ACTION:
      console.log(`inside sendOtpAction ${action.payload.sendOTP}`)
      return {
        ...state,
        isSuccess: false,
        error: undefined,
        sentOtp: false,
        isLoading: true, // Show loading when sending OTP
      };
    case AuthActionTypes.SEND_OTP_SUCCESS_ACTION:
      return {
        ...state,
        sentOtp: action.payload.sentOtp,
        isSuccess: true,
        isLoading: false,
        error: undefined,
      };
    case AuthActionTypes.SEND_OTP_FAILURE_ACTION:
      console.log(`inside failure action:${action.payload.sentOtp}`)
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
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
