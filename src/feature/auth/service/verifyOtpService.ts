import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../utils/axios';

export const VerifyOTPService = async (
  otp: number,
  phoneNumber: number,
  userType: string
) => {
  try {
    console.log('inside verify service..');
    const deviceToken = await AsyncStorage.getItem('fcmToken');
    console.log(`fcm token passed in device token: ${deviceToken}`);
        const response = await axios.post(`/login/validateOTP`, {
            otp:otp,
            phoneNumber:phoneNumber,
            userType:userType,
            deviceToken: deviceToken,
        });
        return response;
    } catch (error) {
        console.log("API error found: ", error);
        throw error;
    }
};