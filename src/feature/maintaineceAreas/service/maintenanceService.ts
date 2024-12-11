import axios from "../../../../src/utils/axios"

export const maintenanceService = (societyId: Number) =>{
    try {
    console.log('inside maintenanceService :)');
    // const headers = createHeaders(token);
    // console.log("Headers being sent:", headers);
    const url = `https://backend-dev.habitatautomations.com/society/amenities?societyId=${Number(societyId)}`;

    console.log("URL being called:", url);

    console.log('========================BEFORE API CALL INSIDE SERVICE========================');
    const res = axios.get(`/society/amenities?societyId=${Number(societyId)}`);
    console.log('========================AFTER API CALL INSIDE SERVICE========================');
    return res;
    }
    catch(error:any) {
        if (error.response) {
            console.log("Error Response Data:", error.response.data);
            console.log("Error Response Status:", error.response.status);
            console.log("Error Response Headers:", error.response.headers);
        } else if (error.request) {
            console.log("No response received. Request:", error.request);
        } else {
            console.log("Error Message:", error.message);
        }
        console.log("Full Error Object:", error);
    }
}

// export const createHeaders = (token: string) => ({
//     Authorization: `Bearer ${token.replace(/"/g,"")}`,
//     "Content-Type": "application/json"
//   });
  