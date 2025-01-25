import { Reducer } from "redux";
import { ActionTypes } from "../../../utils/constants";
import { announcementActions, IAnnouncementData } from "../action/announcementAction";

export interface AnnouncementState {
  isLoading: boolean;
  announcementData: IAnnouncementData[];
  error?: string;
}

const initialState: AnnouncementState = {
  isLoading: false,
  announcementData: [],
  error: undefined,
};

const announcementReducer: Reducer<AnnouncementState, announcementActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ANNOUNCEMENT_DATA:
      console.log(`recieving this data in announcementAction: ${action.payload}`);
      return { ...state, isLoading: true, error: undefined };
    case ActionTypes.FETCH_ANNOUNCEMENT_DATA_SUCCESS:
      console.log('From announcement reducer: -> '+JSON.stringify(action.payload));
      return { ...state, isLoading: false, announcementData: action.payload, error: undefined };
    case ActionTypes.FETCH_ANNOUNCEMENT_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default announcementReducer;