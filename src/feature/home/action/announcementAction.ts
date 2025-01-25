import { createAction, ActionType } from "typesafe-actions";
import { ActionTypes } from "../../../utils/constants";

// export interface IAnnouncementData {
//   pmsId: number;
//   heading:string;
//   conntent:string;
//   society: {
//     name:string,
//   },
//   user: {
//     name:string,
//   },
//   societyAdmin: {
//     societyRole:string,

//   },
//   s3Path: "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg";
// }
// Interface representing the society object in the API response
export interface ISociety {
  id: number;
  name: string;
  address: string;
  gstin: string;
  active: boolean;
  createdAt: string;
  createdBy: number;
  modifiedAt: string;
  modifiedBy: number;
  metadata: string | null;
  builderId: number | null;
  metadataAsJsonString: string;
}

// Interface representing the user object in the API response
export interface IUser {
  id: number;
  name: string;
  phone: number;
  email: string;
  s3Path: string | null;
  password: string | null;
  newPassword: string | null;
  otp: string | null;
  expiredAt: string | null;
  metadata: string | null;
  active: boolean;
  createdAt: string;
  createdBy: number;
  modifiedAt: string;
  modifiedBy: number;
  metadataAsJsonString: string;
}

// Interface representing the society admin object in the API response
export interface ISocietyAdmin {
  id: number;
  societyRole: string;
  society: ISociety;
  societyId: number | null;
  user: IUser;
  userId: number | null;
  active: boolean;
  createdBy: number;
  modifiedBy: number;
}

// Main interface for announcement data
export interface IAnnouncementData {
  id: number;
  heading: string;
  content: string;
  society: ISociety;
  societyId: number | null;
  user: IUser;
  userId: number | null;
  societyAdmin: ISocietyAdmin;
  societyAdminId: number | null;
  active: boolean;
  createdBy: number;
  modifiedBy: number;
}

export interface IHomeInputData {
  societyId: number;
  token: string;
}

export const fetchAnnouncementData = createAction(ActionTypes.FETCH_ANNOUNCEMENT_DATA)<void>();
export const fetchAnnouncementDataSuccess = createAction(ActionTypes.FETCH_ANNOUNCEMENT_DATA_SUCCESS)<IAnnouncementData[]>();
export const fetchAnnouncementDataFailure = createAction(ActionTypes.FETCH_ANNOUNCEMENT_DATA_FAILURE)<{ error: string }>();

// export type HomeProfileActions = ActionType<
//   typeof fetchHomeProfileData | typeof fetchHomeProfileDataSuccess | typeof fetchHomeProfileDataFailure
// >;

export type fetchAnnouncementDataAction = ActionType<typeof fetchAnnouncementData>;
type fetchAnnouncementDataSuccessAction = ActionType<typeof fetchAnnouncementDataSuccess>;
type fetchAnnouncementDataFailureAction = ActionType<typeof fetchAnnouncementDataFailure>;

export type announcementActions = fetchAnnouncementDataAction | fetchAnnouncementDataSuccessAction | fetchAnnouncementDataFailureAction;