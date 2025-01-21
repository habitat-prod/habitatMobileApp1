import { ActionsObservable, StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { rootState } from '../../../redux/store/rootState';
import { IErrorActionData } from '../../../utils/error';
import {ActionTypes} from '../../../utils/constants'
import { IMaintenanceReportActionData, maintenanceReportAction, maintenanceReportFailure, maintenanceReportSuccess } from '../actions/maintenanceReportAction';
import { maintenanceReportService } from '../service/maintenanceReportService';

const maintenanceReportEpic = (action$: ActionsObservable<IMaintenanceReportActionData>, state$: StateObservable<rootState>) =>{
    console.log('inside maintenanceReport epic:');
  return action$.pipe(
    filter(isOfType(ActionTypes.MAINTENANCE_REPORT_ACTION)),
    mergeMap((action: maintenanceReportAction) => {
      console.log('maintenance Report Epic, Payload being sent to API: ', JSON.stringify(action.payload));
      
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');
      console.log('Epic Epic Epic Epic Epic Epic Epic');

      return from(
        maintenanceReportService(
          Number(action.payload.societyId) || 0,
          action.payload.description || '',
          Number(action.payload.societyAmenityId) || 0,
          Number(action.payload.userId) || 0,
          Number(action.payload.problemId) || 0,
      )
      
      ).pipe(
        map((response: any) => {
          console.log('Raw response inside epic: ', JSON.stringify(response.data));
          return maintenanceReportSuccess({
              message: response?.data?.message || 'Operation completed successfully',
              success: response?.data?.success ?? false, // Default to `false` if not provided.
          });
      }),      

      catchError((error: any) => {
        const errorCode = error?.response?.status || 500;
        const errorMessage =
            error?.response?.data?.message || 'Unexpected error occurred!';
        console.error('Error in maintenanceReport epic:', { errorCode, errorMessage });
    
        return of(
            maintenanceReportFailure({
                errorCode,
                message: errorMessage,
            }),
        );
    }),      
      );
    }),
  );
};
export default maintenanceReportEpic;