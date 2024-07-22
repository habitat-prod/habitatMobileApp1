import { Alert, Platform, ToastAndroid } from "react-native";

export const indianCurrencyCommaSeparator = (amountString: string) => {
  const [baseString] = amountString.split('.');

  if (baseString.length <= 3) {
    return amountString;
  }

  return (
    amountString.substring(0, baseString.length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
    ',' +
    amountString.substring(baseString.length - 3)
  );
};

export const Toaster = (message: string) => {
  return Platform.OS === 'android' ? ToastAndroid.show(message, ToastAndroid.SHORT) : Alert.alert('', message);
};