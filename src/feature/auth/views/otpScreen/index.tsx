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
import { useDispatch, useSelector } from 'react-redux'
import { verifyOtp } from '../../action/verifyOtp';

interface IVerifyOTPProps {
  navigation: StackNavigationProp<BootstrapParamsList>;
  route: RouteProp<BootstrapParamsList, BootstrapNavigationScreens.VerifyOTP>;
}

const VerifyOTPScreen: React.FC<IVerifyOTPProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('auth');
  const routeParams = props.route.params;
  const defaultNavigation: NavigationProp<BootstrapParamsList> = useNavigation();

  const [phoneNumber,setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(0);
  const [clearOtp, setClearOtp] = useState(false);
  const [timerState, setTimerState] = useState(TimerStates.running);
  const [resendCount, setResendCount] = useState(0);
  const [timer, setTimer] = useState<number>(defaultOTPTimeout);
  const [errorText, setErrorText] = useState<string>('');

  const dispatch = useDispatch();
  const otpVerified = useSelector((state)=> state.otpVerification.isSuccess);

  useEffect(()=>{
    console.log(`isOtpVerified: ${otpVerified}`)
    if(otpVerified){
    defaultNavigation.navigate(NAVIGATION.HomeScreenNav, {
      screen: MaintainanceAreasScreens.HomeScreen,
    })
  }
  },[otpVerified]); // it triggers when otpVerified updates.

  const handleVerifyOtp = async() => {
    try{
      
    console.log('inside verifyOtp call');
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    if (!phoneNumber) {
      setErrorText('Phone number not found. Please try again.');
      return;
    }
    
    const response: any = await dispatch(verifyOtp({ otp: Number(otp), phoneNumber: Number(phoneNumber), userType: 'user' }));
    console.log('inside otp screen: ',JSON.stringify(response.data));
    console.log('api has been called.');
    setClearOtp(false);
    // if(response?.data?.success) {
    // defaultNavigation.navigate(NAVIGATION.HomeScreenNav, {
    //   screen: MaintainanceAreasScreens.HomeScreen,
    // })
    // }
    // else{
    //   setErrorText(response?.data.message || "invalid otp, please try again..")
    // }

    }
    catch(error){
      console.error('error during otp verification: ',error);
      setErrorText('something went wrong please try again!');
    }
  }

  const handleChangeNumber = () => {
    Keyboard.dismiss();
    defaultNavigation.goBack();
  };

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');
        console.log(`storedPhoneNumber is: ${storedPhoneNumber}`)
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        }
      } catch (error) {
        console.warn('Error fetching phone number from AsyncStorage:', error);
      }
    };
    fetchPhoneNumber();
  }, []);

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
        onClick={()=>handleVerifyOtp()}
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
export default VerifyOTPScreen;
