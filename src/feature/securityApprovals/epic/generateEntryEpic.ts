import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { rootState } from '../../../redux/store/rootState';
import { IErrorActionData } from '../../../utils/error';
import { ActionTypes } from '../../../utils/constants';
import { generateEntryAction, generateEntryFailure, generateEntrySuccess, IGenerateEntryActionData } from '../action/generateEntryAction';
import { GenerateEntryService } from '../service/generateEntryService';

const generateEntryEpic = (action$: ActionsObservable<IGenerateEntryActionData>, state$: StateObservable<rootState>) =>
  action$.pipe(
    filter(isOfType(ActionTypes.GENERATE_ENTRY_ACTION)),
    mergeMap((action: generateEntryAction) => {
      console.log('generateEntry Epic (generating entry): ', action.payload);
      // API calling to Generate entry:
      return from(
        GenerateEntryService(
        action.payload.name,
        action.payload.phone,
        action.payload.arrival,
        action.payload.vehicleType,
        action.payload.numberPlate,
        action.payload.peopleNumber,
        action.payload.visitorType,
        action.payload.visitingPurpose,
        action.payload.flatId,
        action.payload.s3Image,
        action.payload.role

        ),
      ).pipe(
        map((response) => {
          console.log('entry generated Successfully: ', response);
          
          // case success:
              return generateEntrySuccess({
                success:response.success,
                message:response.message
              });
        }),

        catchError((error: IErrorActionData) => {
          console.log('Generate Entry failed: ', error);
          return of(
            generateEntryFailure({
              errorCode: error.errorCode || 500,
              message: error.errorMessage || 'failed to send OTP!',
            }),
          );
        }),
      );
    }),
  );

export default generateEntryEpic;