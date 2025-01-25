import axios from "../../../../src/utils/axios"

export const announcementService = async(societyId: Number) =>{

    console.log('inside announcementService :)');

    return await axios.get(`/noticeBoard/getNotices?societyId=${Number(societyId)}`);
}
