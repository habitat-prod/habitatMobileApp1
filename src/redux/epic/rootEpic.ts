import { combineEpics } from "redux-observable";
import sendOtpEpic from "../../feature/auth/epic/sendOtpEpic";
import verifyOtpEpic from "../../feature/auth/epic/verifyOtpEpic";
import generateTokenEpic from "../../feature/home/epic/tokenGenEpic";
import fetchHomeProfileDataEpic from "../../feature/home/epic/homeProfileEpic";
import fetchMaintenanceDataEpic from "../../feature/maintaineceAreas/epic/maintenanceEpic";
import fetchAmenityProblemDataEpic from "../../feature/maintaineceAreas/epic/amenityProblemEpic";
import generateEntryEpic from "../../feature/securityApprovals/epic/generateEntryEpic";
import fetchSecurityApprovalDataEpic from "../../feature/securityApprovals/epic/securityApprovalEpic";
import addResidentEpic from "../../feature/settings/epic/addResidentEpic";
import maintenanceReportEpic from "../../feature/maintaineceAreas/epic/maintenanceReportEpic";
import editProfileEpic from "../../feature/settings/epic/editProfileEpic";
import fetchAnnouncementsEpic from "../../feature/home/epic/announcementsEpic";

const rootEpic = combineEpics(
    sendOtpEpic, 
    verifyOtpEpic, 
    generateTokenEpic, 
    fetchHomeProfileDataEpic, 
    fetchMaintenanceDataEpic, 
    fetchAmenityProblemDataEpic,
    generateEntryEpic,
    fetchSecurityApprovalDataEpic,
    addResidentEpic,
    maintenanceReportEpic,
    editProfileEpic,
    fetchAnnouncementsEpic
);

export default rootEpic;