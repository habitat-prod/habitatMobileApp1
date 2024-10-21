import axios from '../utils/axios';
import { processUIObject } from '../utils/extractData';

export const LoginService = (
  loginID: string,
  loginType: string,
  loginMode: string,
  password?: string,
) => {
  return axios.post('loginUrl', {
    login_id: loginID,
    login_type: loginType,
    login_mode: loginMode,
    password: password,
  });
};
