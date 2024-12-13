import { ToastAndroid, Platform, Linking, ViewStyle, BackHandler } from 'react-native';

export const Toaster = (message: string, time: any) => {
    return Platform.OS === 'android' ? ToastAndroid.show(message, ToastAndroid.SHORT) : '';
  };
  