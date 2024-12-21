import env from 'react-native-config';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const SetItem = (key: string, val: any) => {
  if (!val) return Promise.reject();
  return AsyncStorage.setItem(env.ENV + '|' + key, val);
};

export const GetItem = (key: string) => {
  return AsyncStorage.getItem(env.ENV + '|' + key);
};
