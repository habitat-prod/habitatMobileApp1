import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaintainanceAreasScreens } from '../../../constants/screens';
import NotificationDetails from '../../home/NotificationDetails';
import HomeProfile from '../views/homeProfile';


export type HomeList = {
  HomeProfile: undefined;
  NotificationDetails: undefined;
};

const HomeStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<HomeList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.HomeProfile} component={HomeProfile} />
      <StackNav.Screen name={MaintainanceAreasScreens.NotificationDetails} component={NotificationDetails} />
    </StackNav.Navigator>
  );
};

export default HomeStackNav;
