import DeviceInfo from 'react-native-device-info';
import { GetItem } from './asyncStorage';

export const getNetworkIP = async () => {
  const ip = await DeviceInfo.getIpAddress();
  return ip;
};

export const getDeviceId = () => {
  return DeviceInfo.getUniqueId();
};


export const getUserLoginData = (): Promise<string | null> => {
    return GetItem('userLoginData');
  };