import React, { useCallback, useEffect, useState } from 'react';
import { NavigationProp, RouteProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Keyboard, SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMButton from '../../../../components/IMButton';
import { BootstrapNavigationScreens, MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import { defaultOTPTimeout } from '../../../../constants/strings';
import { BootstrapParamsList } from '../../navigation';
import IMOtpInput from './IMOtp';
import IMTimer, { TimerStates } from './IMTimer';
import useStyles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { number } from 'yup';
import { verifyOtp } from '../../actions/verifyOtp';
import CustomBottom from '../dialoug/CustomBottom';
import { useTypedSelector } from '../../../../redux/store/configureStore';

interface IVerifyOTPProps {
  navigation: StackNavigationProp<BootstrapParamsList>;
  route: RouteProp<BootstrapParamsList, BootstrapNavigationScreens.VerifyOTP>;
}

const verifyOTPScreen: React.FC<IVerifyOTPProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('auth');
  const routeParams = props.route.params;
  const defaultNavigation: NavigationProp<BootstrapParamsList> = useNavigation();

  const dispatch = useDispatch();

  const verifyOTPScreen = useTypedSelector((state) =>(
     state.otpState // Default empty object to avoid undefined error
  )
);
console.log(`inside verifyOTPScreen: ${verifyOTPScreen}`)
  const [otp, setOtp] = useState('');
  const [verifyOtpData,setVerifyOtpData] = useState({
    mobileNumber: '',
    isValid: true,
  })
  const [clearOtp, setClearOtp] = useState(false);
  const [timerState, setTimerState] = useState(TimerStates.running);
  const [resendCount, setResendCount] = useState(0);
  const [timer, setTimer] = useState<number>(defaultOTPTimeout);
  const [errorText, setErrorText] = useState<string>('');

  
  // const { flatDetailsList, isSucceed } = useSelector((state) => state.otpVerification);

  const handleChangeNumber = () => {
    Keyboard.dismiss();
    defaultNavigation.goBack();
  };

  // console.log(`flatDetailsList from useSelector is: ${flatDetailsList} and isSuccess: ${isSucceed}`)

  //   useEffect(() => {
  //     console.log('isSuccess: ',isSuccess)
  //   if (isSuccess) {
  //     defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
  //       screen: MaintainanceAreasScreens.HomeProfile,
  //     });
  //   }
  // }, [isSuccess, defaultNavigation]);

//   useEffect(() => {
//     if (isSucceed && flatDetailsList.length > 0) {
//         defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
//             screen: MaintainanceAreasScreens.HomeProfile,
//             params: { showModal: true, flatDetailsList },
//         });
//     }
// }, [isSucceed, flatDetailsList, defaultNavigation]);

  

  const verifyOTPCall = async () => {
    console.log('inside verifyOtp call');
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    if (!phoneNumber) {
      setErrorText('Phone number not found. Please try again.');
      return;
    }
    // try {

    const response = dispatch(verifyOtp({ otp: Number(otp), phoneNumber: Number(phoneNumber), userType: 'user' }));
    // try {
    //   verifyOtpService(Number(otp), Number(phoneNumber), defaultNavigation);
    // } catch (error) {
    //   console.log('Error verifying OTP:', error);
    //   setErrorText('Failed to verify OTP. Please try again.');
    // }
    console.log('inside otp screen: ',JSON.stringify(response))
    console.log('api has been called.');
    // console.log(`response in otpScreen: ${response}`)
    setClearOtp(false);
    defaultNavigation.navigate(NAVIGATION.HomeProfileNav,{
      screen: MaintainanceAreasScreens.HomeProfile,
      params: { showModal: true },
    })
  // };
    }

  const handleValidOtp = (val: string) => {
    setOtp(val);
  };

  const handleOtpChange = (val: string) => {
    setOtp(val);
    !!val && setErrorText('');
  };

  const resendOtp = () => {
    setClearOtp(true);
    setResendCount((val: any) => val + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneLogoContainer}>
        <Text style={styles.labelTextStyle}>Verify your phone number</Text>
        <Text style={styles.subLabelText}>{`We’ve sent you a one time verification code to +91 ${props.route.params.phoneNumber}`}</Text>
      </View>
      <IMOtpInput
        testEventId="login-otpDigits-tf"
        clearOtp={clearOtp}
        noOfBoxes={6}
        onValidOtp={handleValidOtp}
        onChange={handleOtpChange}
        errorText={errorText}
      />
      <IMButton
        id="verifyOtpFooter"
        variant='contained'
        title={t('Sign In')}
        disabled={otp.length !== 6}
        // onClick={verifyOTPCall}
        onClick={handleOtpSubmit}
        styles={{
          container: [styles.btnContainer, otp.length !== 6 && styles.disableBtn]
        }}
      />
      <View style={styles.resendContainer}>
        <View style={styles.timerContainer}>
          {timerState !== TimerStates.stopped && (
            <Text style={resendCount > 0 ? styles.resendAgainText : styles.resendText}>{t('Resend Otp in ')}</Text>
          )}
          <IMTimer
            testEventId="login-resendOTP-btn"
            buttonText={t('Resend the code')}
            initialTimer={timer}
            timerStyle={resendCount > 0 ? styles.resendAgainText : styles.resendText}
            isDisabled={resendCount >= 2}
            OnButtonClick={resendOtp}
            onStateChange={(val: TimerStates) => {
              setTimerState(val ?? '');
            }}
            buttonStyle={{ width: 'auto' }}
            titleStyle={{ color: '#3266AE' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default verifyOTPScreen;
