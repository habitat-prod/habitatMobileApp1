import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import ParkingAreaDetails from '../views/reserveAreaDetails';


export type ReserveCommonAreaList = {
  ReserveCommonAreas: undefined;
};

const ReserveCommonAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<ReserveCommonAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.ReserveCommonAreas} component={ParkingAreaDetails} />
    </StackNav.Navigator>
  );
};

export default ReserveCommonAreaStackNav;
