import axios from '../../../utils/axios';

export const maintenanceReportService = async (
    societyId: number,
    description: string,
    societyAmenityId: number,
    userId: number,
    problemId: number,
) => {
    try {
        console.log('inside maintenance Report service..');
        console.log('Payload being sent:', {
            societyId,
            description,
            societyAmenityId,
            userId,
            problemId,
        });
        const response = await axios.post(`/api/maintenance/register`, {
            societyId: societyId,
            description: description,
            societyAmenityId: societyAmenityId,
            userId: userId,
            problemId: problemId,
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
