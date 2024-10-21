import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { defaultOTPTimeout, passwordLoginMode } from '../constants/bootstrap';
import { rootState } from '../store/rootState';
import { IErrorActionData } from '../utils/error';
import { processServerObject } from '../utils/extractData';
import { loginAction, LoginActionTypes, loginFailure, loginSuccess } from '../actions/login';
import { LoginService } from '../services/login';

const loginEpic = (action$: ActionsObservable<loginAction>, state$: StateObservable<rootState>) =>
  action$.pipe(
    filter(isOfType(LoginActionTypes.LOGIN_ACTION)),
    mergeMap((action: loginAction) => {
      console.log('login Epic', action);
      return from(
        LoginService(
          action.payload.loginID,
          action.payload.loginType,
          action.payload.loginMode,
          action.payload.password,
        ),
      ).pipe(
        map((response) => {
          console.log('api success response');
          if (action.payload.loginMode == passwordLoginMode) {
            if (response.headers.authorization != undefined) {
              const authorisationToken = response.headers.authorization;
              const userData = processServerObject(response.data.data);
              return loginSuccess({
                loginID: action.payload.loginID,
                password: action.payload.password,
                authorisationToken: authorisationToken,
                otpTimeout: defaultOTPTimeout,
                userData: userData,
              });
            } else {
              console.log('Authorization token not found in header');
              return loginFailure({
                errorMessage: 'Something Went wrong',
                errorCode: 500,
              });
            }
          } else {
            let otpTimeout = defaultOTPTimeout;
            if ('otp_timeout' in response.data['data']) {
              otpTimeout = response.data['data']['otp_timeout'];
            }
            const userData = processServerObject(response.data.data);
            console.log('user data: ', userData, ' : ', userData.firstName);
            return loginSuccess({
              loginID: action.payload.loginID,
              password: '',
              authorisationToken: '',
              otpTimeout: otpTimeout,
              userData: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                phoneNumber: userData.phoneNumber,
                email: userData.email,
                emailVerified: userData.emailVerified,
                kycStatus: userData.kycStatus,
                phoneVerified: userData.phoneVerified,
                department: userData.department,
                userAliasId: userData.userAliasId,
              },
            });
          }
        }),
        catchError((error: IErrorActionData) => {
          console.log('api error response: ', error);
          return of(
            loginFailure({
              errorCode: error.errorCode,
              errorMessage: error.errorMessage,
              callBack: error.callBack,
            }),
          );
        }),
      );
    }),
  );

export default loginEpic;

