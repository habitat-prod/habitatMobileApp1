import { Reducer } from 'redux';

import { IErrorActionData } from '../utils/error';
import { loginActions, LoginActionTypes } from '../actions/login';
import { IUserData, LoginData } from '../models/login';

export const defaultOTPTimeout = 30000;

export interface LoginState {
  loginData: LoginData;
  otpTimeout: number;
  isSuccess: boolean;
  error?: IErrorActionData;
}

const initialLoginState: LoginState = {
  loginData: new LoginData('', '', '', {} as IUserData),
  otpTimeout: defaultOTPTimeout,
  isSuccess: false,
  error: undefined,
};

const LoginReducer: Reducer<LoginState, loginActions> = (
  state = initialLoginState,
  action: loginActions,
): LoginState => {
  switch (action.type) { 
    case LoginActionTypes.LOGIN_ACTION:
      return {
        ...state,
        isSuccess: false,
        error: undefined,
      };
    case LoginActionTypes.LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        loginData: new LoginData(
          action.payload.loginID,
          action.payload.password,
          action.payload.authorisationToken,
          action.payload.userData,
        ),
        otpTimeout: action.payload.otpTimeout,
        isSuccess: true,
        error: undefined,
      };
    case LoginActionTypes.LOGIN_FAILURE_ACTION:
      return {
        ...state,
        isSuccess: false,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.errorMessage,
          callBack: action.payload.callBack,
        },
      };
    case LoginActionTypes.LOGIN_RESET_ACTION:
      return initialLoginState;
    default:
      return state;
  }
};

export default LoginReducer;