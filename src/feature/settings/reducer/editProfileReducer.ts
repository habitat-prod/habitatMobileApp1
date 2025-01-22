import { Reducer } from 'redux';
import { IErrorActionData } from '../../../utils/error';
import { ActionTypes } from '../../../utils/constants';
import { editProfileActions } from '../action/editProfileAction';

export interface EditProfileState {
  isLoading: boolean;
  isSuccess: boolean;
  error?: IErrorActionData;
}

const initialEditProfileState: EditProfileState = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

const editProfileReducer: Reducer<EditProfileState, editProfileActions> = (
  state = initialEditProfileState,
  action: editProfileActions,
): EditProfileState => {
  switch (action.type) {
    case ActionTypes.EDIT_PROFILE_ACTION:
      console.log(`inside editProfile Action ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        isSuccess: false,
        error: undefined,
        isLoading: true, // Show loading when posting data.
      };
    case ActionTypes.EDIT_PROFILE_SUCCESS:
      console.log(`from editProfile Success in reducer`);
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        error: undefined,
      };
    case ActionTypes.EDIT_PROFILE_FAILURE:
      console.log(`Failure action payload: ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.message,
        },
      };
    case 'RESET_PROFILE_SUCCESS':
      return {
        ...state,
        isSuccess: false,
      };
      ;
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export default editProfileReducer;
