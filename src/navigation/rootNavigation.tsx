import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { BootstrapNavigationScreens, NAVIGATION } from '../constants/screens';
import MaintainaceAreaStackNav from '../feature/maintaineceAreas/navigation';
import ParkingAreaStackNav from '../feature/parkingAccess/navigation';
import ReserveCommonAreaStackNav from '../feature/reserveAreas/navigation';
import SecurityApprovalsStackNav from '../feature/securityApprovals/navigation';
import HazardAreaStackNav from '../feature/hazards/navigation';
import AmbulanceAreaStackNav from '../feature/ambulance/navigation';
import HomeStackNav from '../feature/home/navigation';
import Login from '../feature/auth/views/loginScreen';
import BootstrapStackNav from '../feature/auth/navigation';
import Setting from '../feature/settings/Setting';
import EditProfileScreen from '../feature/settings/EditProfileScreen';
import PaymentDuesScreen from '../feature/settings/PaymentDuesScreen';
import ActiveBookings from '../feature/settings/ActiveBookings';
import CoResidents from '../feature/settings/CoResidents';
import HomeScreen from '../feature/home/HomeScreen';
import AddCoResidents from '../feature/settings/AddCoResidents';
import TermsConditions from '../feature/settings/TermsConditions';
import ContactScreen from '../feature/settings/ContactScreen';
import FeedbackScreen from '../feature/settings/FeedbackScreen';
import PermanentPasses from '../feature/settings/PermanentPasses';
import AddPermanentPass from '../feature/settings/AddPermanentPass';
import GenerateEntry from '../feature/securityApprovals/views/securityApprovalDetails/GenerateEntry';

export type HBStackParamList = {
  HomeProfileNav: { screen: string; params: Record<string, any> } | undefined;
  MaintainaceAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  ParkingAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  ReserveCommonAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  SecurityApprovalsStackNav: { screen: string; params: Record<string, any> } | undefined;
  HazardAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  AmbulanceAreaStackNav: { screen: string; params: Record<string, any> } | undefined;
  BootstrapStackNav: { screen: string; params: Record<string, any> } | undefined;
};

const RootNavigation: React.FunctionComponent = () => {
  const StackNav = createNativeStackNavigator<HBStackParamList>();

  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={NAVIGATION.BootstrapStackNav} component={BootstrapStackNav} />
        <StackNav.Screen name={NAVIGATION.HomeProfileNav} component={HomeStackNav} />
        <StackNav.Screen name={NAVIGATION.MaintainaceAreaStackNav} component={MaintainaceAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.SecurityApprovalsStackNav} component={SecurityApprovalsStackNav} />
        <StackNav.Screen name={NAVIGATION.ParkingAreaStackNav} component={ParkingAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.ReserveCommonAreaStackNav} component={ReserveCommonAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.HazardAreaStackNav} component={HazardAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.AmbulanceAreaStackNav} component={AmbulanceAreaStackNav} />
        <StackNav.Screen name={NAVIGATION.SettingNav} component={Setting}/>
        <StackNav.Screen name={NAVIGATION.EditProfileNav} component={EditProfileScreen} />
        <StackNav.Screen name={NAVIGATION.PaymentDuesScreenNav} component={PaymentDuesScreen} />
        <StackNav.Screen name={NAVIGATION.ActiveBookingsNav} component={ActiveBookings}/>
        <StackNav.Screen name={NAVIGATION.CoResidentsNav} component = {CoResidents} />
        <StackNav.Screen name={NAVIGATION.HomeScreenNav} component = {HomeScreen}/>
        <StackNav.Screen name={NAVIGATION.AddCoResidentsNav} component = {AddCoResidents}/>
        <StackNav.Screen name={NAVIGATION.TermsConditionsNav} component = {TermsConditions}/>
        <StackNav.Screen name={NAVIGATION.ContactScreenNav} component = {ContactScreen} />
        <StackNav.Screen name={NAVIGATION.FeedbackScreenNav} component = {FeedbackScreen}/>
        <StackNav.Screen name={NAVIGATION.PermanentPassesNav} component = {PermanentPasses}/>
        <StackNav.Screen name={NAVIGATION.AddPermanentPassNav} component = {AddPermanentPass}/>
        <StackNav.Screen name={NAVIGATION.GenerateEntryNav} component = {GenerateEntry}/>

      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
