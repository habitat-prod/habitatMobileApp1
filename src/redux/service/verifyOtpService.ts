import axios from '../../utils/axios';

export const VerifyOTPService = async (
  otp: number,
  phoneNumber: number,
  userType: string
) => {
  try {
    console.log('inside verify service..')
        const response = await axios.post(`https://backend-dev.habitatautomations.com/login/validateOTP`, {
            otp,
            phoneNumber,
            userType
        });
        console.log("the response is: ", response.data);
        return response;
    } catch (error) {
        console.log("API error found: ", error);
        throw error;
    }
};
