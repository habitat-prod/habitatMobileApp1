import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { rootState } from '../../../redux/store/rootState';
import { IErrorActionData } from '../../../utils/error';
import { ISendOtpActionData, sendOTPAction, sendOtpFailure, sendOtpSuccess } from '../action/login';
import { OTPService } from '../service/sentOtpService';
import { AuthActionTypes } from '../../../utils/constants';
import { createContext } from 'react';

const sendOtpEpic = (action$: ActionsObservable<ISendOtpActionData>, state$: StateObservable<rootState>) =>
  action$.pipe(
    filter(isOfType(AuthActionTypes.SEND_OTP_ACTION)),
    mergeMap((action: sendOTPAction) => {
      console.log('login Epic (Sending OTP): ', action.payload);
      // API calling to send OTP:
      return from(
        OTPService(
          action.payload.phoneNumber,
          'USER'
        ),
      ).pipe(
        map((response) => {
          console.log('OTP sent Successfully: ', response);
          const otpSaved = createContext(true);
          
          // case success:
              return sendOtpSuccess({
                sentOtp:true
              });
        }),

        catchError((error: IErrorActionData) => {
          console.log('OTP Send failed: ', error);
          return of(
            sendOtpFailure({
              errorCode: error.errorCode || 500,
              message: error.errorMessage || 'failed to send OTP!',
            }),
          );
        }),
      );
    }),
  );

export default sendOtpEpic;