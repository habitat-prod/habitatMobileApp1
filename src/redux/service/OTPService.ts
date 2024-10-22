import { boolean } from 'yup';
import axios from '../../utils/axios';

export const OTPService = (
    phoneNumber:number,
    userType:string,
) => {
  return axios.post(`https://backend-dev.habitatautomations.com/login/sendOtp?phoneNumber=${phoneNumber}&userType=${userType}`, {
    sendOTP:boolean
  });
};