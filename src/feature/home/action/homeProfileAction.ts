import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IHomeProfileData {
  title: string;
  imageUri: string;
  iconSvg: JSX.Element;
  onClick: () => void;
}

export const fetchHomeProfileData = createAction(ActionTypes.FETCH_HOME_PROFILE_DATA)<void>();
export const fetchHomeProfileDataSuccess = createAction(ActionTypes.FETCH_HOME_PROFILE_DATA_SUCCESS)<IHomeProfileData[]>();
export const fetchHomeProfileDataFailure = createAction(ActionTypes.FETCH_HOME_PROFILE_DATA_FAILURE)<{ error: string }>();

export type HomeProfileActions = ActionType<
  typeof fetchHomeProfileData | typeof fetchHomeProfileDataSuccess | typeof fetchHomeProfileDataFailure
>;