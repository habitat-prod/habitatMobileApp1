import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SecurityApprovalTabs from '../../components/securityApprovalTabs';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import IMIcon from '../../../../components/IMIcon';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import useStyles from './styles';

const SecurityApprovalDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}>Security Approvals</Text>
      </View>
      <View style={styles.tabStyle}>
        <SecurityApprovalTabs />
      </View>
    </SafeAreaView>
  );
};

export default SecurityApprovalDetails;
