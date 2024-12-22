import { Reducer } from 'redux';
import { IErrorActionData } from '../../../utils/error';
import { ActionTypes } from '../../../utils/constants';
import { addResidentActions } from '../action/addResidentAction';


export interface AddResidentState {
  isLoading: boolean;
  isSuccess: boolean;        
  error?: IErrorActionData; 
}

const initialAddResidentState: AddResidentState = {
  isLoading: false,
  isSuccess: false,        
  error: undefined,       
};

const addResidentReducer: Reducer<AddResidentState, addResidentActions> = (
  state = initialAddResidentState,
  action: addResidentActions,
): AddResidentState => {
  switch (action.type) {
    case ActionTypes.ADD_RESIDENT_ACTION:
      console.log(`inside addResidentAction ${action.payload.addResident}`);
      return {
        ...state,
        isSuccess: false,
        error: undefined,
        isLoading: true, // Show loading when posting resident details.
      };
    case ActionTypes.ADD_RESIDENT_SUCCESS:
        console.log(`from add Resident Success in reducer`);
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        error: undefined,
      };
    case ActionTypes.ADD_RESIDENT_FAILURE:
      console.log(`inside failure action:${action.payload.addResident}`);
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
      return state;
  }
};

export default addResidentReducer;
