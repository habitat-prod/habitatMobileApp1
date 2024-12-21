import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

export interface ISecurityApprovalData {
    id: number;
    type: string;
    role: string;
    s3Path: "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg";
    ownerRemarks: null;
    securityRemarks: null;
    approvalStatus: string;
    active: true;
    expectedArrival: null;
    expectedDeparture: null;
}

export interface ISecurityApprovalInputData {
  flatId: number;
}

export const fetchSecurityApprovalData = createAction(ActionTypes.FETCH_SECURITY_APPROVAL)<ISecurityApprovalInputData>();
export const fetchSecurityApprovaleDataSuccess = createAction(ActionTypes.FETCH_SECURITY_APPROVAL_SUCCESS)<ISecurityApprovalData[]>();
export const fetchSecurityApprovalDataFailure = createAction(ActionTypes.FETCH_SECURITY_APPROVAL_FAILURE)<{ error: string }>();


export type fetchSecurityApprovalDataAction = ActionType<typeof fetchSecurityApprovalData>;
type fetchSecurityApprovalDataSuccessAction = ActionType<typeof fetchSecurityApprovaleDataSuccess>;
type fetchSecurityApprovalDataFailureAction = ActionType<typeof fetchSecurityApprovalDataFailure>;

export type SecurityApprovalActions = fetchSecurityApprovalDataAction | fetchSecurityApprovalDataSuccessAction | fetchSecurityApprovalDataFailureAction;