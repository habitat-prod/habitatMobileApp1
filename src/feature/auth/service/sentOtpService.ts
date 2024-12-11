import { boolean, number, string } from 'yup';
import axios from '../../../utils/axios';

export const OTPService = (
    phoneNumber:number,
    userType:string,
) => {
  return axios.post(`/login/sendOtp?phoneNumber=${phoneNumber}&userType=${userType}`, {
    sendOTP:boolean
  });
};