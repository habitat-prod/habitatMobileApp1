import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import ParkingAreaDetails from '../views/parkingAreaDetails';
import AddReserveParkingDetails from '../views/addReserveParkingDetails';
import ReservedConfirmation from '../views/reservedDetails';


export type ParkingAreaList = {
  ParkingAreas: undefined;
  AddReserveParkingDetails: undefined;
  ReservedConfirmation: {
    slotNumber: string;
  };
};

const ParkingAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<ParkingAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.ParkingAreas} component={ParkingAreaDetails} />
      <StackNav.Screen name={MaintainanceAreasScreens.AddReserveParkingDetails} component={AddReserveParkingDetails} />
      <StackNav.Screen name={MaintainanceAreasScreens.ReservedConfirmation} component={ReservedConfirmation} />
    </StackNav.Navigator>
  );
};

export default ParkingAreaStackNav;
