import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/loginScreen';
import { BootstrapNavigationScreens } from '../../../constants/screens';
import VerifyOTPScreen from '../views/otpScreen';

export type BootstrapParamsList = {
  Login: undefined;
  VerifyOTP: { phoneNumber: string };
};

const BootstrapStackNav: React.FunctionComponent = () => {
  const Stack = createStackNavigator<BootstrapParamsList>();

  return (
    <Stack.Navigator initialRouteName={BootstrapNavigationScreens.Login} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={BootstrapNavigationScreens.Login} component={Login} />
      <Stack.Screen name={BootstrapNavigationScreens.VerifyOTP} component={VerifyOTPScreen} />
    </Stack.Navigator>
  );
};
export default BootstrapStackNav;
