import { Reducer } from "redux";
import { ActionTypes } from "../../../utils/constants";
import { AmenityProblemActions, IAmentityProblemData } from "../actions/amenityProblemAction";

export interface AmenityProblemState {
  isLoading: boolean;
  data: IAmentityProblemData[];
  error?: string;
}

const initialState: AmenityProblemState = {
  isLoading: false,
  data: [],
  error: undefined,
};

const amenityProblemReducer: Reducer<AmenityProblemState, AmenityProblemActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_Amenity_Problem_DATA:
      console.log(`recieving this data in fetchAmenityProblemData in reducer: ${action.payload}`);
      return { ...state, isLoading: true, error: undefined };
    case ActionTypes.FETCH_Amenity_Problem_DATA_SUCCESS:
      console.log('From AmenityProblemDataSuccess in reducer: -> '+JSON.stringify(action.payload));
      return { ...state, isLoading: false, data: action.payload, error: undefined };
    case ActionTypes.FETCH_Amenity_Problem_DATA_FAILURE:
        console.log('from FETCH_Amenity_Problem_DATA_FAILURE in reducer');
      return { ...state, isLoading: false, error: action.payload.error, data:[]};
    default:
      return state;
  }
};

export default amenityProblemReducer;