import React from 'react';
import { useTheme } from 'react-native-paper';

import useStyle from './styles';
import { IMTopTabNavigator } from '../../../../components/IMTopTabNavigator';
import MaintainanceLogArea from '../../views/logDetailsArea/maintainaceLogArea';
import PendingLogArea from '../../views/logDetailsArea/pendingLogArea';

export enum LogAreaListTabs {
  Maintainace = 'Maintainace',
  Pending = 'Pending',
}

export type LogAreaList = {
  [LogAreaListTabs.Maintainace]: { selectedTab: string };
  [LogAreaListTabs.Pending]: { selectedTab: string };
};

const LogAreaTabs: React.FC = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const tabs = [
    {
      name: 'Maintainace Log',
      component: MaintainanceLogArea,
      initialParams: {
        selectedTab: LogAreaListTabs.Maintainace,
      },
    },
    {
      name: 'Pending Approval',
      component: PendingLogArea,
      initialParams: {
        selectedTab: LogAreaListTabs.Pending,
      },
    },
  ];

  return (
    <IMTopTabNavigator
      screenData={tabs}
      navigatorData={{
        backBehavior: 'none',
        initialRouteName: LogAreaListTabs.Maintainace,
        screenOptions: {
          tabBarBounces: true,
          tabBarActiveTintColor: '#4682B4',
          tabBarInactiveTintColor: theme.Palette.text.body,
          tabBarStyle: styles.tabStyle,
          tabBarIndicatorStyle: styles.indicatorStyle,
          tabBarLabelStyle: styles.tabHeadingStyle,
        },
      }}
    />
  );
};

export default LogAreaTabs;
