import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { NAVIGATION } from '../constants/screens';
import HomeProfile from '../feature/home/components/views/homeProfile';
import MaintainaceAreaStackNav from '../feature/maintaineceAreas/navigation';
import ParkingAreaStackNav from '../feature/parkingAccess/navigation';
import ReserveCommonAreaStackNav from '../feature/reserveAreas/navigation';
import SecurityApprovalsStackNav from '../feature/securityApprovals/navigation';
import HazardAreaStackNav from '../feature/hazards/navigation';
import AmbulanceAreaStackNav from '../feature/ambulance/navigation';

export type HBStackParamList = {
  HomeProfileNav: { screen: string; params: Record<string, any> } | undefined;
  MaintainaceAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  ParkingAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  ReserveCommonAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  SecurityApprovalsStackNav: { screen: string; params: Record<string, any> } | undefined;
  HazardAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  AmbulanceAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
};

const RootNavigation: React.FunctionComponent = () => {
  const StackNav = createNativeStackNavigator<HBStackParamList>();

  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{ headerShown: false }}>
        <StackNav.Screen name={NAVIGATION.HomeProfileNav} component={HomeProfile} />
        <StackNav.Screen name={NAVIGATION.MaintainaceAreaStackNav} component={MaintainaceAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.SecurityApprovalsStackNav} component={SecurityApprovalsStackNav} />
        <StackNav.Screen name={NAVIGATION.ParkingAreaStackNav} component={ParkingAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.ReserveCommonAreaStackNav} component={ReserveCommonAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.HazardAreaStackNav} component={HazardAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.AmbulanceAreaStackNav} component={AmbulanceAreaStackNav} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
