import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { rootState } from '../../../redux/store/rootState';
import { IErrorActionData } from '../../../utils/error';
import { IVerifyOtpActionData, verifyOtpAction, verifyOtpFailure, verifyOtpSuccess } from '../action/verifyOtp';
import { VerifyOTPService } from '../service/verifyOtpService';
import {AuthActionTypes} from '../../../utils/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from 'react-native-config'

const verifyOtpEpic = (action$: ActionsObservable<IVerifyOtpActionData>, state$: StateObservable<rootState>) =>{
    console.log('inside verifyOtp epic:');
  return action$.pipe(
    filter(isOfType(AuthActionTypes.VERIFY_OTP_ACTION)),
    mergeMap((action: verifyOtpAction) => {
      console.log('login Epic (verifying OTP): ', action.payload);
      // API calling to send OTP:
      return from(
        VerifyOTPService(
            action.payload.otp,
          action.payload.phoneNumber,
          'USER'
        ),
      ).pipe(
        map((response:any) => {
          console.log('Raw response inside epic: ', JSON.stringify(response.data.data.flatDetailsList));
          // console.log('response keys: ',Object.keys(response));
          const tempToken = response.data.data.tempToken;
          const flatDetailsList = response.data.data.flatDetailsList;
          const flatListSize = response.data.data.flatListSize;

          const jsonValue = JSON.stringify(flatDetailsList);

          AsyncStorage.setItem('flatList',jsonValue);

          const fullResponse = response.data;
          const fullResponse2 = response.data.data;
          console.log('OTP verified Successfully: and flatDetailList is: ', JSON.stringify(flatDetailsList));

          const saved = AsyncStorage.getItem('flatList');
          console.log(`savedList is: =========== ${saved}`);

          console.log(`full response is: ${JSON.stringify(fullResponse)}`);
          // console.log(`fullResponse2 is: ${JSON.stringify(fullResponse2)}`);

          // console.log(`flatListSize directly from response: ${flatListSize}`)

          console.log(`flatList Type is: ${typeof flatDetailsList}`);
          
          console.log(`Stringify user details: ${JSON.stringify(flatDetailsList)}`);
          
          const a = AsyncStorage.setItem('token',JSON.stringify(tempToken));
          const b = AsyncStorage.setItem('flatListSize',flatListSize);

          console.log(`SAVED IN ASYNCSTORAGE flatListSize is: ${b} and token is: ${a}`)

          console.log(`tokenn is HERE:= ${JSON.stringify(tempToken)}`);

          // AsyncStorage.setItem(
          //   env.ENV + '|' +'userLoginData',
          //   JSON.stringify({
          //     userId: "null",
          //     userName: "null",
          //     authorisationToken: tempToken,
          //   }),
          // );

          // const {token,userDetails} = response;
          // case success:
              return verifyOtpSuccess({
                token: tempToken,
                userDetails: flatDetailsList,
                flatListSize: flatListSize,
              });
        }),

        catchError((error: IErrorActionData) => {
          console.log('OTP Verification failed: ', error);
          return of(
            verifyOtpFailure({
              errorCode: error.errorCode || 500,
              message: error.errorMessage || 'failed to verify OTP!',
            }),
          );
        }),
      );
    }),
  );
};
export default verifyOtpEpic;