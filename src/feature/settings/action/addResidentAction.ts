import { ActionType, createAction } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IAddResidentActionData {
  name: string,
  phone: string,
  email: string,
  s3Path: string,
  active: false,
  invitationFlatId: number,
  userPhone: number,
  desiredRole: string
}

  export interface IAddResidentSuccessActionData {
    message: string;
    success: boolean;
  }


  export interface IAddResidentFailureActionData {
    message: string;
    errorCode:number;
  }

export const addResident = createAction(ActionTypes.ADD_RESIDENT_ACTION)<IAddResidentActionData>();
export const addResidentSuccess = createAction(ActionTypes.ADD_RESIDENT_SUCCESS)<IAddResidentSuccessActionData>();
export const addResidentFailure = createAction(ActionTypes.ADD_RESIDENT_FAILURE)<IAddResidentFailureActionData>();

export type addResidentAction = ActionType<typeof addResident>;
type addResidentSuccessAction = ActionType<typeof addResidentSuccess>;
type addResidentFailureAction = ActionType<typeof addResidentFailure>;

export type addResidentActions = addResidentAction | addResidentSuccessAction | addResidentFailureAction;