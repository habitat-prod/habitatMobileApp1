import Config from "react-native-config";
import axios from "../../../../src/utils/axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const maintenanceService = async(societyId: Number) =>{
    try {
    let token1 = await AsyncStorage.getItem('token');
    const token = `${token1}`;
    console.log(`token inside maintenance service is: ${token}`);
    
    console.log('inside maintenanceService :)');
    // const headers = createHeaders(token);
    // console.log("Headers being sent:", headers);
    const url = `https://backend-dev.habitatautomations.com/society/amenities?societyId=${Number(societyId)}`;

    console.log("URL being called:", url);

    console.log('========================BEFORE API CALL INSIDE SERVICE========================');
    const res = await axios.get(`/society/amenities?societyId=${societyId}`);
    console.log('Request Headers: ', Config.headers);


// const url = 'https://backend-dev.habitatautomations.com/society/amenities?societyId=1';

// const headers = {
//   Authorization: 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiT1dORVIiLCJzdWIiOiIyIiwiaWF0IjoxNzMzOTMyNTU1LCJleHAiOjE3MzY1MjQ1NTUsInNtYWxsRXhwaXJhdGlvbiI6MTczMzk2ODU1NTQ2NH0.byJXxDl2PbKjMZ7dBLLUFA7OQtB_m9VbJHhCMX8uOgshFGkF0WwG8D-B2zOViZU4',
//   'Content-Type': 'application/json',
// };

// const res = axios
//   .get(url, { headers })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
console.log(`response is: ${JSON.stringify(res.data)}`);

    console.log('========================AFTER API CALL INSIDE SERVICE========================');
    return res;
    }
    catch(error:any) {
        console.log(`Error in MSERVICE is: ${error}`)
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

export const createHeaders = (token: string) => ({
    Authorization: `Bearer ${token.replace(/"/g,"")}`,
    "Content-Type": "application/json"
  });
  