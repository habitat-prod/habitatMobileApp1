import { MaintainanceAreasScreens, NAVIGATION } from '../../../constants/screens';
import axios from '../../../utils/axios';

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

        // if(response.status == 200) {
        //   const {flatDetailsList} = JSON.stringify(response.data);
        //   console.log(`flatDetailsList from verifyOtpService is: ${flatDetailsList}`)
        //   // Navigate directly to HomeProfile with the data
        //   defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
        //     screen: MaintainanceAreasScreens.HomeProfile,
        //     params: { showModal: true, flatDetailsList },
        //   });
        // }
        // else {
        //   console.error('failed to verify OTP');
        //   throw new Error('Failed to verify OTP');
        // }
        return response;
    } catch (error) {
        console.log("API error found: ", error);
        throw error;
    }
};
