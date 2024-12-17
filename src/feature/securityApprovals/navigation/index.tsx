import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintainanceAreasScreens } from '../../../constants/screens';
import SecurityApprovalDetails from '../views/securityApprovalDetails';
import { SecurityApprovalListTabs } from '../components/securityApprovalTabs';
import NotificationDetails from '../../home/NotificationDetails';


export type SecurityApprovalList = {
  SecurityApprovals: {
    selectedTab: SecurityApprovalListTabs;
  };
};

const SecurityApprovalsStackNav: React.FC = () => {
  const StackNav = createNativeStackNavigator<SecurityApprovalList>();

  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name={MaintainanceAreasScreens.SecurityApprovals} component={SecurityApprovalDetails} />
    </StackNav.Navigator>
  );
};

export default SecurityApprovalsStackNav;
