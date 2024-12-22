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
      console.log('maintenance Report Epic (uploading data): ', action.payload);
      // API calling to add resident:

      return from(
        maintenanceReportService(
            action.success,
            action.s3PathProblem,
            Number(action.societyId),
            Number(action.societyAmenityId),
            Number(action.problemId),
            Number(action.managerId),
            Number(action.staffId),
            Number(action.userId),
            action.description
        ),
      ).pipe(
        map((response:any) => {
          console.log('Raw response inside epic: ', JSON.stringify(response.data));

          // case success:
              return maintenanceReportSuccess({
                message: response.data.message,
                success: response.data.success
              });
        }),

        catchError((error: IErrorActionData) => {
          console.log('adding Resident failed: ', error);
          return of(
            maintenanceReportFailure({
              errorCode: error.errorCode || 500,
              message: error.errorMessage || 'failed to post maintenance Report!',
            }),
          );
        }),
      );
    }),
  );
};
export default maintenanceReportEpic;