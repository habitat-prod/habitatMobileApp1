import RNRestart from 'react-native-restart';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'Axios';
import { isEmpty } from 'lodash';

import { URL } from '../constants/URL';
import { Toaster } from './common';
import { getNetworkIP } from './device';
import { IErrorActionData } from './error';
import { getUserLoginData } from './device';
import { isNetworkAvailable } from './networkUtil';

const axios = Axios.create({
  baseURL: 'https://backend-dev.habitatautomations.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json', 
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  async (config) => {
    console.log('Final Request Headers From The axios file is ::::::', config.headers);
    // When Internet is not connected.
    const error: IErrorActionData = {
      errorCode: 500,
      errorMessage: 'no connection',
    };
    const isConnected = await isNetworkAvailable();
    if (!isConnected) {
      Toaster('Error',error.errorMessage);
      return Promise.reject(error);
    }

    // Do something before request is sent
    // config.headers['x-access-token'] = this.userToken;
    // config.headers['X-Forwarded-For'] = await getNetworkIP();
    if (!config.headers.authorization || config.headers.authorization == '') {
      const dataStr = await getUserLoginData();
      console.log(`datstr in axios file = ${dataStr}`);
      if (dataStr != null) {
        const data = JSON.parse(dataStr);
        console.log(`data in axios file is = ${JSON.stringify(data)}`);
        config.headers.authorization = `Bearer ${data.authorisationToken}`;
        console.log(`config.headers.authorisation is : ${config.headers.authorization}`);
      }
    }
    console.log('request config: ', JSON.stringify(config));
    config.headers['X-Forwarded-For'] = await getNetworkIP();
    return config;
  },
  (error) => {
    // Do something with response error
    console.log('API ERR:', error);
    !isEmpty(error) && !isEmpty(error.errorMessage) && Toaster(error.errorMessage);
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    let error: IErrorActionData = {
      errorCode: 500,
      errorMessage: 'somethingWentWrong',
    };
    if (response.status != 200 && response.status !=201) {
      console.error('response error', response);
      error = {
        errorCode: response?.status,
        errorMessage: response?.statusText,
      };
      Toaster(error?.errorMessage);
      return Promise.reject(error);
    }
    if (response == undefined) {
      console.error('response undefined:', response);
      !isEmpty(error) && !isEmpty(error?.errorMessage) && Toaster(error?.errorMessage);
      return Promise.reject(error);
    }
    return response;
  },
  (error) => {
    console.log('Entering in error block: ', error);
    // How can we get error code and related
    const newError = {
      errorCode: 500,
      errorMessage: error?.code,
    };
    if (error?.response) {
      console.log('error response: ', error?.response);
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
      newError.errorCode = error?.response?.status;
      newError.errorMessage =
        error?.response?.data['error_message'] == undefined ? error?.code : error?.response?.data['error_message'];
    }
    if (
      // newError.errorCode == 410 || 
      (newError.errorCode == 401 && error?.response?.config?.url != URL.login)) {
      //triggering logout and restart
      Toaster('You need to re-authenticate again, Restarting!');
      console.warn("Unauthorized! Token might be expired.");
      console.error("Unauthorized detected. AsyncStorage clear is disabled for debugging.");
      // setTimeout(() => {
      //   console.log('entering in set timeout of restart');
      //   AsyncStorage.clear().then(() => {
      //     console.log('cleared async storage');
      //     RNRestart.Restart();
      //   });
      // }, 1000);
    } else {
      // For Timeout
      if (newError.errorMessage == 'ECONNABORTED') {
        newError.errorMessage = 'requestTimeOut';
      }
      !isEmpty(newError) && !isEmpty(newError.errorMessage) && Toaster(newError.errorMessage);
    }
    return Promise.reject(newError);
  },
);

// axios.interceptors.response.use(
//   (response) => {
//     // Handle successful response
//     return response;
//   },
//   (error) => {
//     console.log('Entering in error block: ', error);
    
//     const newError = {
//       errorCode: 500,
//       errorMessage: error?.code,
//     };

//     if (error?.response) {
//       console.log('Error response: ', error?.response);
//       console.log("Error Response Data:", error.response.data);
//       console.log("Error Response Status:", error.response.status);
//       console.log("Error Response Headers:", error.response.headers);

//       // Specific check for 415 - Unsupported Media Type
//       if (error.response.status === 415) {
//         console.error("Unsupported Media Type detected:^^^^^^^^^^^^^^^^^^^^^^^");
//         console.error("Request Data:", error.config?.data);
//         console.error("Request Headers:", error.config?.headers);
//       }

//       newError.errorCode = error.response.status;
//       newError.errorMessage =
//         error?.response?.data['error_message'] === undefined ? error.code : error.response.data['error_message'];
//     } else if (error.request) {
//       console.log("No response received. Request:", error.request);
//     } else {
//       console.log("Error Message:", error.message);
//     }

//     console.log("Full Error Object:", error);

//     // Return or handle the error
//     return Promise.reject(newError);
//   }
// );


export default axios;
