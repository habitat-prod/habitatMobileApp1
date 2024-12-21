import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IHomeProfileData {
  pmsId: number;
  pmsName:string;
  s3Path: "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg";
  active: true;
  onClick: () => void;
}

export interface IHomeInputData {
  societyId: number;
  token: string;
}

export const fetchHomeProfileData = createAction(ActionTypes.FETCH_HOME_PROFILE_DATA)<void>();
export const fetchHomeProfileDataSuccess = createAction(ActionTypes.FETCH_HOME_PROFILE_DATA_SUCCESS)<IHomeProfileData[]>();
export const fetchHomeProfileDataFailure = createAction(ActionTypes.FETCH_HOME_PROFILE_DATA_FAILURE)<{ error: string }>();

// export type HomeProfileActions = ActionType<
//   typeof fetchHomeProfileData | typeof fetchHomeProfileDataSuccess | typeof fetchHomeProfileDataFailure
// >;

export type fetchHomeProfileDataAction = ActionType<typeof fetchHomeProfileData>;
type fetchHomeProfileDataSuccessAction = ActionType<typeof fetchHomeProfileDataSuccess>;
type fetchHomeProfileDataFailureAction = ActionType<typeof fetchHomeProfileDataFailure>;

export type homeProfileActions = fetchHomeProfileDataAction | fetchHomeProfileDataSuccessAction | fetchHomeProfileDataFailureAction;