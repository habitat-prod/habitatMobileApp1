import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constant/screens';
import MaintainaceDetailsArea from '../views/maintainaceDetailsArea';


export type MaintainaceAreaList = {
    MaintainanceAreas: undefined;
};

const MaintainaceAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<MaintainaceAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.MaintainanceAreas} component={MaintainaceDetailsArea} />
    </StackNav.Navigator>
  );
};

export default MaintainaceAreaStackNav;
