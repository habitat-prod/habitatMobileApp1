import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IMaintenanceData {
id: number;
locationName: string;
amenityId: number;
amenityName: string;
societyId: number;
active: boolean;
createdBy: null,
modifiedBy: null,
s3Path: null,
multipartFile: null
onClick: () => void;
}

export interface IMaintenanceInputData {
  societyId: number;
  token: string;
}

export const fetchMaintenanceData = createAction(ActionTypes.FETCH_MAINTENANCE_DATA)<void>();
export const fetchMaintenanceDataSuccess = createAction(ActionTypes.FETCH_MAINTENANCE_DATA_SUCCESS)<IMaintenanceData[]>();
export const fetchMaintenanceDataFailure = createAction(ActionTypes.FETCH_MAINTENANCE_DATA_FAILURE)<{ error: string }>();

export type fetchMaintenanceDataAction = ActionType<typeof fetchMaintenanceData>;
type fetchMaintenanceDataSuccessAction = ActionType<typeof fetchMaintenanceDataSuccess>;
type fetchMaintenanceDataFailureAction = ActionType<typeof fetchMaintenanceDataFailure>;

export type maintenanceActions = fetchMaintenanceDataAction | fetchMaintenanceDataSuccessAction | fetchMaintenanceDataFailureAction;