import { Reducer } from 'redux';
import { IErrorActionData } from '../../../utils/error';
import { loginActions } from '../action/login';
import { IUserData } from '../model/login';
import { AuthActionTypes } from '../../../utils/constants';

export interface OtpVerificationState {
  // flatDetailsList: [];
  isLoading: boolean;
  isSuccess: boolean;       
  token?: string;           
  userDetails?: IUserData[];
  error?: IErrorActionData; 
  flatListSize: Number;
}

const initialVerificationState: OtpVerificationState = {
  // flatDetailsList: [],
  isLoading: false,
  isSuccess: false,
  token: undefined,
  userDetails: [],
  error: undefined,
  flatListSize: 0,
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
      console.log(`reducer FDL update: ${JSON.stringify(action.payload.flatDetailsList)}`);
      console.log(`reducer userDetails update: ${JSON.stringify(action.payload.userDetails)}`);
      console.log(`reducer token update: ${JSON.stringify(action.payload.tempToken)}`);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        token: action.payload.token, // Store token
        // flatDetailsList: action.payload.flatDetailsList,
        userDetails: action.payload.userDetails,
        flatListSize: action.payload.flatListSize,
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