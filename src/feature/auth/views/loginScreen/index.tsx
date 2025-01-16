import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMTextInput from '../../../../components/IMInput/IMTextInput';
import IMButton from '../../../../components/IMButton';
import { BootstrapParamsList } from '../../navigation';
import { BootstrapNavigationScreens, NAVIGATION } from '../../../../constants/screens';
import HandPhone from '../../../../assets/svg/HandPhone';
import IMBadge from '../../../../components/IMBadge';
import IndiaFlag from '../../../../assets/svg/IndiaFlag';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP } from '../../action/login';
import { HBStackParamList } from 'src/navigation/rootNavigation';
import {StackNavigationProp} from '@react-navigation/stack';


const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const styles = useStyles(theme);
  const bootstrapNavigation: NavigationProp<BootstrapParamsList> = useNavigation();
  // const [isLoggedIn,setIsLoggedIn] = useState(false);

  const navigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const dispatch = useDispatch();
  const otpSent = useSelector((state)=> state.otp.sentOtp);

    useEffect( ()=>{
      const checkLoginState = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token){
        console.log('inside isLoggedIn condition :)');
        navigation.navigate(NAVIGATION.HomeScreenNav);
      }
      };
      checkLoginState();
    },[]);

    useEffect(() => {
      console.log(`otpSent is: ${otpSent}`);
      if (otpSent) {
        bootstrapNavigation.navigate(BootstrapNavigationScreens.VerifyOTP, {
          phoneNumber: loginData.mobileNumber,
        });
      }
  }, [otpSent]); // Trigger only when otpSent changes

  const handleSentOtp = async() =>{
    if (!mobileRegex.test(loginData.mobileNumber)) {
      setMessage("Invalid mobile number.");
      return;
    }
    try{
    console.log('inside the handleSendOtp fun.')
    if (loginData.mobileNumber.length === 10) {
      console.log('number digits are perfect.')
      await AsyncStorage.setItem('phoneNumber',loginData.mobileNumber);
      // Dispatch OTP action
      dispatch(sendOTP({
        phoneNumber: Number(loginData.mobileNumber),
        userType: 'user', 
      }));
  }
}
  catch(error) {
    console.error(`Error in handleSendOtp: ${error}`);
  }
  }


  const mobileRegex = /^[6-9][0-9]{9}$/;

  const [loginData, setLoginData] = useState({
    mobileNumber: '',
    isValid: true,
  });

  const handleNumberChange = (fieldName: string, value?: string) => {
    setLoginData({
      mobileNumber: value ?? '',
      isValid: mobileRegex.test(value ?? ''),
    });
  };


  const renderStartAdorement = () => (
    <IMBadge
      id={''}
      variant={'solid'}
      label='+91'
      disabled
      leftIcon={{ iconSvg: <IndiaFlag /> }}
      styles={{
        container: styles.badgeContainer,
        titleStyle: { color: 'black' }
      }}
    />
  )

  const renderLoginView = () => (
    <>
      <View style={styles.callingPhone} testID="login-info-container">
        <HandPhone />
        <Text style={styles.labelTextStyle} >What’s your phone number ?</Text>
        <Text style={styles.subLabelText} >We’ll use it to get your flat number and deliver our services at your door step.</Text>
      </View>
      <View style={styles.inputRootContainer}>
        <IMTextInput
          testId="login-mobileNumber-tf"
          name={'mobile-number'}
          label=''
          type={'non-masked'}
          placeholder='Phone number'
          maxLength={10}
          value={loginData.mobileNumber}
          onChange={handleNumberChange}
          // onChange={(value) => handleNumberChange('mobile-vala', value)}
          startAdornment={renderStartAdorement()}
          keyboardType="numeric"
          style={{
            rootContainer: styles.inputContainer,
            inputText: styles.inputText,
            labelContainer: styles.labelContainer,
          }}
        />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderLoginView()}
        <IMButton
          id='btn'
          title='Get Verification Code'
          // onClick={() =>    bootstrapNavigation.navigate(BootstrapNavigationScreens.VerifyOTP, {
          //   phoneNumber: loginData.mobileNumber,
          // })}
          onClick={()=> handleSentOtp()}
          disabled={loginData.mobileNumber.length !== 10}
          styles={{
            container: [styles.btnContainer, loginData.mobileNumber.length !== 10 && styles.disableBtn],
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
