import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

import useStyle from './styles';
import { IMTopTabNavigation } from '../../../../components/HBTopTabNavigator';
import SecurityApprovalListSection from '../securityApprovalListSection';

export enum SecurityApprovalListTabs {
  Visitor = 'Visitor',
  Pending = 'Pending',
}

export type SecurityApprovalList = {
  [SecurityApprovalListTabs.Visitor]: { selectedTab: string };
  [SecurityApprovalListTabs.Pending]: { selectedTab: string };
};

const SecurityApprovalTabs: React.FC = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const tabs = [
    {
      name: 'Visitor Log',
      component: SecurityApprovalListSection,
      initialParams: {
        selectedTab: SecurityApprovalListTabs.Visitor,
      },
    },
    {
      name: 'Pending Approval',
      component: SecurityApprovalListSection,
      initialParams: {
        selectedTab: SecurityApprovalListTabs.Pending,
      },
    },
  ];

  return (
    <IMTopTabNavigation
      screenData={tabs}
      navigatorData={{
        backBehavior: 'none',
        initialRouteName: SecurityApprovalListTabs.Visitor,
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

export default SecurityApprovalTabs;
