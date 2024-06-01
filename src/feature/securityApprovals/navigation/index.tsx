import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import SecurityApprovalDetails from '../views/securityApprovalDetails';
import { SecurityApprovalListTabs } from '../components/securityApprovalTabs';
import NotificationDetails from '../views/NotificationDetails';


export type SecurityApprovalList = {
  SecurityApprovals: {
    selectedTab: SecurityApprovalListTabs;
  };
  NotificationDetails: undefined;
};

const SecurityApprovalsStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<SecurityApprovalList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.SecurityApprovals} component={SecurityApprovalDetails} />
      <StackNav.Screen name={MaintainanceAreasScreens.NotificationDetails} component={NotificationDetails} />
    </StackNav.Navigator>
  );
};

export default SecurityApprovalsStackNav;
