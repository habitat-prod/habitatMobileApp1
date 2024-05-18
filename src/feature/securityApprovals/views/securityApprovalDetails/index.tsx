import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import SecurityApprovalTabs from '../../components/securityApprovalTabs';

const SecurityApprovalDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Security Approvals</Text>
      <View style={styles.tabStyle}>
        <SecurityApprovalTabs />
      </View>
    </SafeAreaView>
  );
};

export default SecurityApprovalDetails;
