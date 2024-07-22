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

  const [otp, setOtp] = useState('');
  const [clearOtp, setClearOtp] = useState(false);
  const [timerState, setTimerState] = useState(TimerStates.running);
  const [resendCount, setResendCount] = useState(0);
  const [timer, setTimer] = useState<number>(defaultOTPTimeout);
  const [errorText, setErrorText] = useState<string>('');

  const handleChangeNumber = () => {
    Keyboard.dismiss();
    defaultNavigation.goBack();
  };

  const verifyOTPCall = () => {
    setClearOtp(false);
    defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
      screen: MaintainanceAreasScreens.HomeProfile,
    })
  };

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
        onClick={verifyOTPCall}
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
