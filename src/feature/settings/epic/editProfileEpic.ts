import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { rootState } from '../../../redux/store/rootState';
import {ActionTypes} from '../../../utils/constants'
import { editProfileAction, editProfileFailure, editProfileSuccess, IEditProfileActionData } from '../action/editProfileAction';
import { editProfileService } from '../service/editProfileService';

const editProfileEpic = (action$: ActionsObservable<IEditProfileActionData>, state$: StateObservable<rootState>) =>{
    console.log('inside editProfile epic:');
  return action$.pipe(
    filter(isOfType(ActionTypes.EDIT_PROFILE_ACTION)),
    mergeMap((action: editProfileAction) => {
      console.log('editProfile Epic, Payload being sent to API: ', JSON.stringify(action.payload));
      
      console.log('Epic Epic Epic Epic Epic Epic Epic');

      return from(
        editProfileService(
          action.payload.email || '',
          action.payload.vehicleNumber || '',
          Number(action.payload.userId) || 0,
      )
      
      ).pipe(
        map((response: any) => {
          console.log('Raw response inside epic: ', JSON.stringify(response.data));
          return editProfileSuccess({
              message: response?.data?.message || 'Operation completed successfully',
              success: response?.data?.success ?? false, // Default to `false` if not provided.
          });
      }),      

      catchError((error: any) => {
        const errorCode = error?.response?.status || 500;
        const errorMessage =
            error?.response?.data?.message || 'Unexpected error occurred!';
        console.error('Error in editProfile epic:', { errorCode, errorMessage });
    
        return of(
            editProfileFailure({
                errorCode,
                message: errorMessage,
            }),
        );
    }),      
      );
    }),
  );
};
export default editProfileEpic;