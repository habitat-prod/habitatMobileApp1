import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import SecurityApprovalTabs from '../../components/securityApprovalTabs';
import IMIcon from '../../../../components/IMIcon';
import BellOutlined from '../../../../assets/svgv1/BellOutlined';
import useStyles from './styles';

const SecurityApprovalDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Security Approvals</Text>
        <IMIcon testId='Close' iconSvg={<BellOutlined />} onClick={() => { }} />
      </View>
      <View style={styles.tabStyle}>
        <SecurityApprovalTabs />
      </View>
    </SafeAreaView>
  );
};

export default SecurityApprovalDetails;
