import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import SecurityApprovalTabs from '../../components/securityApprovalTabs';
import IMIcon from '../../../../components/IMIcon';
import BellOutlined from '../../../../assets/svgv1/BellOutlined';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import useStyles from './styles';

const SecurityApprovalDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const handleBellIcon = () => (
    defaultNavigation.navigate(NAVIGATION.SecurityApprovalsStackNav, {
      screen: MaintainanceAreasScreens.NotificationDetails,
      params: {}
    }
    ));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Security Approvals</Text>
        <IMIcon testId='Close' iconSvg={<BellOutlined />} onClick={handleBellIcon} />
      </View>
      <View style={styles.tabStyle}>
        <SecurityApprovalTabs />
      </View>
    </SafeAreaView>
  );
};

export default SecurityApprovalDetails;
