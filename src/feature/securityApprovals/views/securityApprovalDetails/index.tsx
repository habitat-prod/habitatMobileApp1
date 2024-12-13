import React from 'react';
import {  Image, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SecurityApprovalTabs from '../../components/securityApprovalTabs';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import IMIcon from '../../../../components/IMIcon';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import useStyles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NAVIGATION } from '../../../../../src/constants/screens';

const SecurityApprovalDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row',alignContent:'flex-end',justifyContent:'space-between', marginTop:5}}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}>Security Approvals</Text>
      </View>
      <TouchableOpacity onPress={()=> defaultNavigation.navigate(NAVIGATION.GenerateEntryNav)}>
      <Image source={require('../../../../assets/png/calendar.png')} style={{width:21,height:21, marginRight:9}}/>
      </TouchableOpacity>
      </View>
      <View style={styles.tabStyle}>
        <SecurityApprovalTabs />
      </View>
    </SafeAreaView>
  );
};

export default SecurityApprovalDetails;
