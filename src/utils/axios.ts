import RNRestart from 'react-native-restart';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { isEmpty } from 'lodash';

// import { URL } from '../constants/Url';
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
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  async (config) => {
    // When Internet is not connected.
    const error: IErrorActionData = {
      errorCode: 500,
      errorMessage: 'no connection',
    };
    const isConnected = await isNetworkAvailable();
    if (!isConnected) {
      Toaster(error.errorMessage);
      return Promise.reject(error);
    }

    // Do something before request is sent
    // config.headers['x-access-token'] = this.userToken;
    config.headers['X-Forwarded-For'] = await getNetworkIP();
    if (!config.headers.authorization || config.headers.authorization == '') {
      const dataStr = await getUserLoginData();
      if (dataStr != null) {
        const data = JSON.parse(dataStr);
        config.headers.authorization = data.authorisationToken;
      }
    }
    console.log('request config: ', JSON.stringify(config));
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
    if (response.status != 200) {
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
      newError.errorCode = error?.response?.status;
      newError.errorMessage =
        error?.response?.data['error_message'] == undefined ? error?.code : error?.response?.data['error_message'];
    }
    if (newError.errorCode == 410 || (newError.errorCode == 401 && error?.response?.config?.url != 'URL.login')) {
      //triggering logout and restart
      Toaster('You need to re-authenticate again, Restarting!');
      setTimeout(() => {
        console.log('entering in set timeout of restart');
        AsyncStorage.clear().then(() => {
          console.log('cleared async storage');
          RNRestart.Restart();
        });
      }, 1000);
    } else {
      console.log('inside else condn of axios.')
      // For Timeout
      if (newError.errorMessage == 'ECONNABORTED') {
        newError.errorMessage = 'requestTimeOut';
      }
      !isEmpty(newError) && !isEmpty(newError.errorMessage) && Toaster(newError.errorMessage);
    }
    return Promise.reject(newError);
  },
);

export default axios;
