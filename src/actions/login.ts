import { ActionType, createAction } from 'typesafe-actions';

import { IErrorActionData } from '../utils/error';
import { IUserData } from '../models/login';

export enum LoginActionTypes {
  LOGIN_ACTION = 'LOGIN_ACTION',
  LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS_ACTION',
  LOGIN_FAILURE_ACTION = 'LOGIN_FAILURE_ACTION',
  LOGIN_RESET_ACTION = 'LOGIN_RESET_ACTION',
}

export interface ILoginActionData {
  loginID: string;
  loginType: string;
  loginMode: string;
  password: string;
}

export interface ILoginSuccessActionData {
  loginID: string;
  password: string;
  authorisationToken: string;
  userData: IUserData;
  otpTimeout: number;
}

export const login = createAction(LoginActionTypes.LOGIN_ACTION)<ILoginActionData>();
export const loginSuccess = createAction(LoginActionTypes.LOGIN_SUCCESS_ACTION)<ILoginSuccessActionData>();
export const loginFailure = createAction(LoginActionTypes.LOGIN_FAILURE_ACTION)<IErrorActionData>();
export const loginReset = createAction(LoginActionTypes.LOGIN_RESET_ACTION)();

export type loginAction = ActionType<typeof login>;
type loginSuccessAction = ActionType<typeof loginSuccess>;
type loginFailureAction = ActionType<typeof loginFailure>;
type loginResetAction = ActionType<typeof loginReset>;

export type loginActions = loginAction | loginSuccessAction | loginFailureAction | loginResetAction;
