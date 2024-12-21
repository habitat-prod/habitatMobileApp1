import { Reducer } from "redux";
import { ActionTypes } from "../../../utils/constants";
import { IMaintenanceData, maintenanceActions } from "../actions/maintenanceAction";

export interface MaintenanceState {
  isLoading: boolean;
  data: IMaintenanceData[];
  error?: string;
}

const initialState: MaintenanceState = {
  isLoading: false,
  data: [],
  error: undefined,
};

const maintenanceReducer: Reducer<MaintenanceState, maintenanceActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MAINTENANCE_DATA:
      console.log(`recieving this data in fetchMaintenanceAction: ${action.payload}`);
      return { ...state, isLoading: true, error: undefined };
    case ActionTypes.FETCH_MAINTENANCE_DATA_SUCCESS:
      console.log('From maintenance reducer: -> '+JSON.stringify(action.payload));
      return { ...state, isLoading: false, data: action.payload.data, error: undefined };
    case ActionTypes.FETCH_MAINTENANCE_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default maintenanceReducer;