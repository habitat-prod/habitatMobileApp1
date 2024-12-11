import axios from "../../../../src/utils/axios"

export const homeProfileService = (societyId: Number) =>{

    console.log('inside homeProfileService :)');

    // const headers = createHeaders(token);

    // console.log("Headers being sent:", headers);

    return axios.get(`/pmsSocietyMapping/bySociety?societyId=${Number(societyId)}`);
}

// export const createHeaders = (token: string) => ({
//     Authorization: `Bearer ${token.replace(/"/g, "")}`,
//     "Content-Type": "application/json",
//   });
  