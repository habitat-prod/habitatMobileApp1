import { Reducer } from "redux";
import { HomeProfileActions, IHomeProfileData } from "../action/homeProfileAction";
import { ActionTypes } from "../../../utils/constants";

export interface HomeProfileState {
  isLoading: boolean;
  data: IHomeProfileData[];
  error?: string;
}

const initialState: HomeProfileState = {
  isLoading: false,
  data: [],
  error: undefined,
};

const homeProfileReducer: Reducer<HomeProfileState, HomeProfileActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HOME_PROFILE_DATA:
      console.log(`recieving this data in fetchHomeProfAction: ${action.payload}`);
      return { ...state, isLoading: true, error: undefined };
    case ActionTypes.FETCH_HOME_PROFILE_DATA_SUCCESS:
      console.log('From homeProfile reducer: -> '+JSON.stringify(action.payload));
      return { ...state, isLoading: false, data: action.payload, error: undefined };
    case ActionTypes.FETCH_HOME_PROFILE_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default homeProfileReducer;