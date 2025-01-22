import { ActionType, createAction } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IEditProfileActionData {
    email?:string,
    vehicleNumber?:string,
    userId:number,
}

  export interface IEditProfileSuccessData {
    message: string;
    success: boolean;
  }


  export interface IEditProfileFailureData {
    message: string;
    errorCode:number;
  }

export const editProfile = createAction(ActionTypes.EDIT_PROFILE_ACTION)<IEditProfileActionData>();
export const editProfileSuccess = createAction(ActionTypes.EDIT_PROFILE_SUCCESS)<IEditProfileSuccessData>();
export const editProfileFailure = createAction(ActionTypes.EDIT_PROFILE_FAILURE)<IEditProfileFailureData>();

export type editProfileAction = ActionType<typeof editProfile>;
type editProfileSuccessAction = ActionType<typeof editProfileSuccess>;
type editProfileFailureAction = ActionType<typeof editProfileFailure>;

export type editProfileActions = editProfileAction | editProfileSuccessAction | editProfileFailureAction;