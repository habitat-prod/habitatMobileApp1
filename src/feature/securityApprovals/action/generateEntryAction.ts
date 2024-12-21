import { ActionType, createAction } from "typesafe-actions";
import { ActionTypes } from "../../../../src/utils/constants";

export interface IGenerateEntryActionData {
    name:string,
    phone:string,
    arrival:string,
    vehicleType:string,
    numberPlate:string,
    peopleNumber:string,
    visitorType:string,
    visitingPurpose:string,
    flatNumber:string,
    s3Image:string,
  }

  export interface IGenerateEntrySuccessData {
    success:boolean,
    message:string,
  }


  export interface IGenerateEntryFailureData {
    message: string;
    errorCode:number;
  }

export const generateEntry = createAction(ActionTypes.GENERATE_ENTRY_ACTION)<IGenerateEntryActionData>();
export const generateEntrySuccess = createAction(ActionTypes.GENERATE_ENTRY_SUCCESS)<IGenerateEntrySuccessData>();
export const generateEntryFailure = createAction(ActionTypes.GENERATE_ENTRY_FAILURE)<IGenerateEntryFailureData>();

export type generateEntryAction = ActionType<typeof generateEntry>;
type generateEntrySuccessAction = ActionType<typeof generateEntrySuccess>;
type generateEntryFailureAction = ActionType<typeof generateEntryFailure>;

export type generateEntryActions = generateEntryAction | generateEntrySuccessAction | generateEntryFailureAction;