import { Alert } from 'react-native';
import call from 'react-native-phone-call';

export const callPerson = (item: any) => {
  console.log('Checking phone number validity...');
  
  // Validate if the phone is a 10-digit number
  const isValidPhone = typeof item === 'string' && /^\d{10}$/.test(item);

  if (isValidPhone) {
    console.log('Valid 10-digit phone number found.');
    const args = {
      number: item.toString(),
      prompt: true,
      skipCanOpen: true,
    };

    call(args).catch((err: any) => {
      console.error('Calling failed:', err);
      Alert.alert('Error', 'Calling failed!');
    });
  } else {
    console.log('Invalid phone number detected.');
    Alert.alert('Invalid Phone Number', 'Please check the phone number and try again.');
  }
};
