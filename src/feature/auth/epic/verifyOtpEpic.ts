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
        map((response) => {
          console.log('Raw response inside epic: ', JSON.stringify(response.data.data.flatDetailsList));
          console.log('response keys: ',Object.keys(response));
          // const dispatch = useDispatch();
          const tempToken = JSON.stringify(response.data.data.tempToken);
          let flatDetailsList = response.data.data.flatDetailsList;
          console.log('OTP verified Successfully: ', flatDetailsList);

          const listSize = flatDetailsList.length;
          
          console.log(`flatListSize is: ${listSize}`);

          console.log(`flatList Type is: ${typeof flatDetailsList}`);

          flatDetailsList = JSON.stringify(flatDetailsList);
          console.log(`Stringify user details: ${flatDetailsList}`);
          
          AsyncStorage.setItem('token',tempToken);

          console.log(`tokenn is HERE:= ${tempToken}`);

          // dispatch(updateListSize({listSize}));

          const {token,userDetails} = response;
          // case success:
              return verifyOtpSuccess({
                token,
                userDetails,
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