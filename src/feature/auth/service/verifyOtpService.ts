import axios from '../../../utils/axios';

export const VerifyOTPService = async (
  otp: number,
  phoneNumber: number,
  userType: string
) => {
  try {
    console.log('inside verify service..')
        const response = await axios.post(`https://backend-dev.habitatautomations.com/login/validateOTP`, {
            otp:otp,
            phoneNumber:phoneNumber,
            userType:userType
        });
        return response;
    } catch (error) {
        console.log("API error found: ", error);
        throw error;
    }
};