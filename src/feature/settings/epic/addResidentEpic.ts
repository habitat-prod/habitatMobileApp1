import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { rootState } from '../../../redux/store/rootState';
import { IErrorActionData } from '../../../utils/error';
import {ActionTypes} from '../../../utils/constants'
import { addResidentAction, addResidentFailure, addResidentSuccess, IAddResidentActionData } from '../action/addResidentAction';
import { addRessidentService } from '../service/addResidentService';

const addResidentEpic = (action$: ActionsObservable<IAddResidentActionData>, state$: StateObservable<rootState>) =>{
    console.log('inside addResident epic:');
  return action$.pipe(
    filter(isOfType(ActionTypes.ADD_RESIDENT_ACTION)),
    mergeMap((action: addResidentAction) => {
      console.log('add Resident Epic (uploading data): ', action.payload);
      // API calling to add resident:
      return from(
        addRessidentService(
            action.name,
            action.phone,
            action.email,
            action.s3Path,
            action.active,
            Number(action.invitationFlatId),
            Number(action.userPhone),
            action.desiredRole
        ),
      ).pipe(
        map((response:any) => {
          console.log('Raw response inside epic: ', JSON.stringify(response.data));

          const fullResponse = response.data;

          console.log(`full response is: ${JSON.stringify(fullResponse)}`);

          // case success:
              return addResidentSuccess({
                message: response.data.message,
                success: response.data.success
              });
        }),

        catchError((error: IErrorActionData) => {
          console.log('adding Resident failed: ', error);
          return of(
            addResidentFailure({
              errorCode: error.errorCode || 500,
              message: error.errorMessage || 'failed to add Resident!',
            }),
          );
        }),
      );
    }),
  );
};
export default addResidentEpic;