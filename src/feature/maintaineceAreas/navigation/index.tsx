import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import MaintainaceDetailsArea from '../views/maintainaceDetailsArea';
import LogDetailsArea from '../views/logDetailsArea';
import MaintainanceCardDetails from '../views/maintainaceDetailsArea/maintainanceCardDetails';
import MaintainanceListDetails from '../views/maintainaceDetailsArea/maintainanceListDetails';
import { IconSvgProps } from '../../../components/IMIcon';


export type MaintainaceAreaList = {
    MaintainanceAreas: undefined;
    LogDetailsArea: undefined;
    MaintainanceCardDetails: {
      title: string;
      imageUrl: string;
      iconSvg: ReactElement<IconSvgProps>;
    };
    MaintainanceListDetails: {
      title: string;
      imageUrl: string;
      iconSvg: ReactElement<IconSvgProps>;
    };
};

const MaintainaceAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<MaintainaceAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.MaintainanceAreas} component={MaintainaceDetailsArea} />
      <StackNav.Screen name={MaintainanceAreasScreens.LogDetailsArea} component={LogDetailsArea} />
      <StackNav.Screen name={MaintainanceAreasScreens.MaintainanceCardDetails} component={MaintainanceCardDetails} />
      <StackNav.Screen name={MaintainanceAreasScreens.MaintainanceListDetails} component={MaintainanceListDetails} />
    </StackNav.Navigator>
  );
};

export default MaintainaceAreaStackNav;
