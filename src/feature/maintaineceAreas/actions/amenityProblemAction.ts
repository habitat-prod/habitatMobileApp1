import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface IAmenityProblemData {
  id:number;
  amenityId: number;
  problemName:string;
  active: boolean;
  onClick: () => void;
}

export interface IAmenityProblemInputData {
  amenityId: number;
}

export const fetchAmenityProblemData = createAction(ActionTypes.FETCH_Amenity_Problem_DATA)<IAmenityProblemInputData>();
export const fetchAmenityProblemDataSuccess = createAction(ActionTypes.FETCH_Amenity_Problem_DATA_SUCCESS)<IAmenityProblemData[]>();
export const fetchAmenityProblemDataFailure = createAction(ActionTypes.FETCH_Amenity_Problem_DATA_FAILURE)<{ error: string; statusCode?: number }>();


export type fetchAmenityProblemDataAction = ActionType<typeof fetchAmenityProblemData>;
type fetchAmenityProblemDataSuccessAction = ActionType<typeof fetchAmenityProblemDataSuccess>;
type fetchAmenityProblemDataFailureAction = ActionType<typeof fetchAmenityProblemDataFailure>;

export type AmenityProblemActions = fetchAmenityProblemDataAction | fetchAmenityProblemDataSuccessAction | fetchAmenityProblemDataFailureAction;