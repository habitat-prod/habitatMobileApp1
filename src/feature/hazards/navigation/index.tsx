import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constant/screens';
import HazardAreaDetails from '../views/hazardAreaDetails';


export type HazardAreaList = {
  HazardAreas: undefined;
};

const HazardAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<HazardAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.HazardAreas} component={HazardAreaDetails} />
    </StackNav.Navigator>
  );
};

export default HazardAreaStackNav;
