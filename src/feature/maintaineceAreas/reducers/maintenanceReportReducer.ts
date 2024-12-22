import { Reducer } from 'redux';
import { IErrorActionData } from '../../../utils/error';
import { ActionTypes } from '../../../utils/constants';
import { maintenanceReportActions } from '../actions/maintenanceReportAction';

export interface MaintenanceReportState {
  isLoading: boolean;
  isSuccess: boolean;        
  error?: IErrorActionData; 
}

const initialMaintenanceReportState: MaintenanceReportState = {
  isLoading: false,
  isSuccess: false,        
  error: undefined,       
};

const maintenanceReportReducer: Reducer<MaintenanceReportState, maintenanceReportActions> = (
  state = initialMaintenanceReportState,
  action: maintenanceReportActions,
): MaintenanceReportState => {
  switch (action.type) {
    case ActionTypes.MAINTENANCE_REPORT_ACTION:
      console.log(`inside maintenanceReport Action ${action.payload}`);
      return {
        ...state,
        isSuccess: false,
        error: undefined,
        isLoading: true, // Show loading when posting data.
      };
    case ActionTypes.MAINTENANCE_REPORT_SUCCESS:
        console.log(`from maintenanceReport Success in reducer`);
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        error: undefined,
      };
    case ActionTypes.MAINTENANCE_REPORT_FAILURE:
      console.log(`inside failure action:${JSON.stringify(action.payload)}`);
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.message,
        },
      };
      default:
          console.warn(`Unhandled action type: ${action.type}`);
          return state;
  }
};

export default maintenanceReportReducer;
