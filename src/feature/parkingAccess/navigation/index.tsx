import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import ParkingAreaDetails from '../views/parkingAreaDetails';


export type ParkingAreaList = {
  ParkingAreas: undefined;
};

const ParkingAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<ParkingAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.ParkingAreas} component={ParkingAreaDetails} />
    </StackNav.Navigator>
  );
};

export default ParkingAreaStackNav;
