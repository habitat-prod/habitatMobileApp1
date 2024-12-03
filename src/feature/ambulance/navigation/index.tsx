import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import AmbulanceAreaDetails from '../views/ambulanceAreaDetails';


export type HazardAreaList = {
  AmbulanceArea: undefined;
};

const AmbulanceAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<HazardAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.AmbulanceArea} component={AmbulanceAreaDetails} />
    </StackNav.Navigator>
  );
};

export default AmbulanceAreaStackNav;
