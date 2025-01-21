import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IGenerateTokenActionData {
    propertyId: number;
    userType: string;
  }

export interface IGenerateTokenSuccessActionData {
token:string;
userName:string;
flatNo:string;
flatName:string;
buildingName:string;
societyId:number;
societyName:string;
societyAddress:string;
}


export interface IGenerateTokenFailureActionData {
message: string;
errorCode:number;
}


export const generateToken = createAction(ActionTypes.GENERATE_TOKEN)<IGenerateTokenActionData>();
export const generateTokenSuccess = createAction(ActionTypes.GENERATE_TOKEN_SUCCESS)<IGenerateTokenSuccessActionData>();
export const generateTokenFailure = createAction(ActionTypes.GENERATE_TOKEN_FAILURE)<IGenerateTokenFailureActionData>();

export type TokenActions =
  | ActionType<typeof generateToken>
  | ActionType<typeof generateTokenSuccess>
  | ActionType<typeof generateTokenFailure>;