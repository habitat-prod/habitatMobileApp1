import { Reducer } from "redux";
import { ActionTypes } from "../../../utils/constants";
import { ISecurityApprovalData, SecurityApprovalActions } from "../action/securityAprovalsAction";

export interface SecurityApprovalState {
  isLoading: boolean;
  data: ISecurityApprovalData[];
  error?: string;
}

const initialState: SecurityApprovalState = {
  isLoading: false,
  data: [],
  error: undefined,
};

const securityApprovalReducer: Reducer<SecurityApprovalState, SecurityApprovalActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SECURITY_APPROVAL:
      console.log(`recieving this data in fetchSecurityApprovalAction: ${action.payload}`);
      return { ...state, isLoading: true, error: undefined };
    case ActionTypes.FETCH_SECURITY_APPROVAL_SUCCESS:
      console.log('From SecurityApproval reducer: -> '+JSON.stringify(action.payload));
      return { ...state, isLoading: false, data: action.payload, error: undefined };
    case ActionTypes.FETCH_SECURITY_APPROVAL_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default securityApprovalReducer;