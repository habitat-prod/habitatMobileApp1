// import { Reducer } from 'redux';

// import { IErrorActionData } from '../../utils/error';
// import { loginActions, AuthActionTypes } from '../actions/login';
// import { IUserData } from '../models/login';

// export const defaultOTPTimeout = 30000;

// export interface LoginState {
//   sentOtp: boolean;          // Indicates if OTP was successfully sent
//   otpTimeout: number;        // Timeout value for OTP
//   isLoading:boolean;
//   isSuccess: boolean;        // General success flag for login or OTP verification
//   token?: string;            // JWT token received after successful OTP verification
//   userDetails?: IUserData;   // User details received after successful OTP verification
//   error?: IErrorActionData;  // Stores error information if any API call fails
// }

// const initialLoginState: LoginState = {
//   sentOtp: false,          // Initially, no OTP has been sent
//   otpTimeout: defaultOTPTimeout,  // Setting the default OTP timeout
//   isLoading: false,
//   isSuccess: false,        // No action is successful at the start
//   token: undefined,        // No token initially
//   userDetails: undefined,  // No user details initially
//   error: undefined,        // No error initially
// };

// const userReducer: Reducer<LoginState, loginActions> = (
//   state = initialLoginState,
//   action: loginActions,
// ): LoginState => {
//   switch (action.type) { 
//     case AuthActionTypes.SEND_OTP_ACTION:
//       return {
//         ...state,
//         isSuccess: false,
//         error: undefined,
//         sentOtp: false,
//       };
//     case AuthActionTypes.SEND_OTP_SUCCESS_ACTION:
//       return {
//         ...state,
//         sentOtp: action.payload.sentOtp,
//         isSuccess: true,
//         error: undefined,
//       };
//     case AuthActionTypes.SEND_OTP_FAILURE_ACTION:
//       return {
//         ...state,
//         isSuccess: false,
//         error: {
//           errorCode: action.payload.errorCode,
//           errorMessage: action.payload.message,
//         },
//       };
//       case AuthActionTypes.VERIFY_OTP_ACTION:
//         return {
//           ...state,
//           isLoading:true,
//           isSuccess:false,
//         };
//       case AuthActionTypes.VERIFY_OTP_SUCCESS_ACTION:
//         return {
//           ...state,
//           isLoading: false,
//           isSuccess: true,
//           token: action.payload.token, // Store token here
//           userDetails: action.payload.userDetails, // Store user details here
//           error: undefined,
//         };
//         case AuthActionTypes.VERIFY_OTP_FAILURE_ACTION:
//           return {
//             ...state,
//             isLoading: false,
//             isSuccess:false,
//             error: {
//               errorCode:action.payload.errorCode,
//               errorMessage:action.payload.message,
//             }
//           };
//     default:
//       return state;
//   }
// };

// export default userReducer;

import { Reducer } from 'redux';
import { IErrorActionData } from '../../utils/error';
import { loginActions } from '../actions/login';
import { AuthActionTypes } from '../../utils/constants';


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
