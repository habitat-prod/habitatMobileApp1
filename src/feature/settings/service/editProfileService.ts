import axios from '../../../utils/axios';

export const editProfileService = async (
    email?:string,
    vehicleNumber?:string,
    userId?:number
) => {
    try {
        console.log('inside editProfile service..');
        console.log('Payload being sent:', {
            email,
            vehicleNumber,
            userId
        });
        const response = await axios.put(`/user/update?userId=${userId}`, {
            email,
            vehicleNumber
        });
        console.log(`Api response is:=> ${response}`)
        return response;
    } catch (error) {
        if (error.response) {
            console.log('API Error Status:', error.response.status); // HTTP status code
            console.log('API Error Data:', error.response.data);     // Error payload
            console.log('API Error Headers:', error.response.headers); // Headers
        } else if (error.request) {
            console.log('API Request Error:', error.request);        // Network error
        } else {
            console.log('Unexpected Error Message:', error.message); // Unexpected error
        }
        throw error;
    }
};
