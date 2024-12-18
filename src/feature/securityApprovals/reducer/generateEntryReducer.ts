import { Reducer } from 'redux';
import { IErrorActionData } from '../../../utils/error';
import { ActionTypes } from '../../../utils/constants';
import { generateEntryActions } from '../action/generateEntryAction';

export interface GenerateEntryState {
  isLoading: boolean;
  isSuccess: boolean;      
  message:string;
  error?: IErrorActionData; 
}

const initialGenerateEntryState: GenerateEntryState = {
  isLoading: false,
  isSuccess: false,
  message:"empty message",
  error: undefined,
};

const generateEntryReducer: Reducer<GenerateEntryState, generateEntryActions> = (
  state = initialGenerateEntryState,
  action: generateEntryActions,
): GenerateEntryState => {
  switch (action.type) {
    case ActionTypes.GENERATE_ENTRY_ACTION:
    console.log('generate entry reducer called.')
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case ActionTypes.GENERATE_ENTRY_SUCCESS:
    console.log(`reducer data update on succeed: ${action.payload.success}`);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: undefined,
      };
    case ActionTypes.GENERATE_ENTRY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default generateEntryReducer;