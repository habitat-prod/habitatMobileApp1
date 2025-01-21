import { ActionType, createAction } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IMaintenanceReportActionData {
    societyId: number,
    description: string,
    societyAmenityId: number,
    userId: number,
    problemId: number,
}

  export interface IMaintenanceReportSuccessData {
    message: string;
    success: boolean;
  }


  export interface IMaintenanceReportFailureData {
    message: string;
    errorCode:number;
  }

export const maintenanceReport = createAction(ActionTypes.MAINTENANCE_REPORT_ACTION)<IMaintenanceReportActionData>();
export const maintenanceReportSuccess = createAction(ActionTypes.MAINTENANCE_REPORT_SUCCESS)<IMaintenanceReportSuccessData>();
export const maintenanceReportFailure = createAction(ActionTypes.MAINTENANCE_REPORT_FAILURE)<IMaintenanceReportFailureData>();

export type maintenanceReportAction = ActionType<typeof maintenanceReport>;
type maintenanceReportSuccessAction = ActionType<typeof maintenanceReportSuccess>;
type maintenanceReportFailureAction = ActionType<typeof maintenanceReportFailure>;

export type maintenanceReportActions = maintenanceReportAction | maintenanceReportSuccessAction | maintenanceReportFailureAction;