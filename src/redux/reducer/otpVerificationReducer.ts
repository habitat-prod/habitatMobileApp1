import { Reducer } from 'redux';
import { IErrorActionData } from '../../utils/error';
import { loginActions } from '../actions/login';
import { IUserData } from '../models/login';
import { AuthActionTypes } from '../../utils/constants';

export interface OtpVerificationState {
  isLoading: boolean;
  isSuccess: boolean;       
  token?: string;           
  userDetails?: IUserData;   
  error?: IErrorActionData; 
}

const initialVerificationState: OtpVerificationState = {
  isLoading: false,
  isSuccess: false,        
  token: undefined,       
  userDetails: undefined,  
  error: undefined,        
};

const otpVerificationReducer: Reducer<OtpVerificationState, loginActions> = (
  state = initialVerificationState,
  action: loginActions,
): OtpVerificationState => {
  switch (action.type) {
    case AuthActionTypes.VERIFY_OTP_ACTION:
    console.log('reducer called.')
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case AuthActionTypes.VERIFY_OTP_SUCCESS_ACTION:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        token: action.payload.token, // Store token
        userDetails: action.payload.userDetails, // Store user details
        error: undefined,
      };
    case AuthActionTypes.VERIFY_OTP_FAILURE_ACTION:
      return {
        ...state,
        isLoading: false,
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

export default otpVerificationReducer;
