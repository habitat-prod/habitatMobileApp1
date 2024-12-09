import axios from "../../../../src/utils/axios"

export const homeProfileService = (societyId: Number, token: string) =>{

    console.log('inside homeProfileService :)');

    const headers = createHeaders(token);

    return axios.get(`https://backend-dev.habitatautomations.com/pmsSocietyMapping/bySociety?societyId=${Number(societyId)}`,
            { headers }
        );
}

export const createHeaders = (token: string) => ({
    Authorization: `Bearer ${token.replace(/"/g, "")}`,
    "Content-Type": "application/json",
  });
  