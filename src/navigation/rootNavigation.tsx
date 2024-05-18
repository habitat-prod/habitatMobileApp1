import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { NAVIGATION } from '../constant/screens';
import HomeProfile from '../feature/home/components/views/homeProfile';

export type IMStackParamList = {
  HomeProfileNav: { screen: string; params: Record<string, any> } | undefined;
};

const RootNavigation: React.FunctionComponent = () => {
  const StackNav = createNativeStackNavigator<IMStackParamList>();

  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{ headerShown: false }}>
        <StackNav.Screen name={NAVIGATION.HomeProfileNav} component={HomeProfile} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
