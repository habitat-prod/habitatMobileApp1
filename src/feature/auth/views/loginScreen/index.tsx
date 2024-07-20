import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMTextInput from '../../../../components/IMInput/IMTextInput';
import IMButton from '../../../../components/IMButton';
import { BootstrapParamsList } from '../../navigation';
import { BootstrapNavigationScreens } from '../../../../constants/screens';
import HandPhone from '../../../../assets/svg/HandPhone';
import IMBadge from '../../../../components/IMBadge';
import IndiaFlag from '../../../../assets/svg/IndiaFlag';
import useStyles from './styles';

const Login: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const bootstrapNavigation: NavigationProp<BootstrapParamsList> = useNavigation();

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
          onClick={() =>    bootstrapNavigation.navigate(BootstrapNavigationScreens.VerifyOTP, {
            phoneNumber: '',
          })}
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
