import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MaintainanceAreasScreens } from '../../../constants/screens';
import ReserveListingArea from '../views/reserveListingArea';
import ReserveDetailsArea from '../views/reserveDetailsArea';
import { IconSvgProps } from '../../../components/IMIcon';


export type ReserveCommonAreaList = {
  ReserveCommonAreas: undefined;
  ReserveDetailsArea: {
    title: string;
    imageUrl: string;
    iconSvg: ReactElement<IconSvgProps>;

  };
};

const ReserveCommonAreaStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<ReserveCommonAreaList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.ReserveCommonAreas} component={ReserveListingArea} />
      <StackNav.Screen name={MaintainanceAreasScreens.ReserveDetailsArea} component={ReserveDetailsArea} />
    </StackNav.Navigator>
  );
};

export default ReserveCommonAreaStackNav;
