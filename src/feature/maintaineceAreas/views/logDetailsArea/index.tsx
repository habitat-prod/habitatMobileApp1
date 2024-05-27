import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import LogAreaTabs from '../../components/logAreaTabs';
import IMIcon from '../../../../components/HBIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import useStyles from './styles';

const LogDetailsArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <IMIcon
        testId='icon'
        onClick={defaultNavigation.goBack}
        iconSvg={<ArrowBackFilled />}
        containerStyle={styles.iconContainerStyle}
      />
      <View style={styles.subContainer}>
        <LogAreaTabs />
      </View>
    </SafeAreaView>
  );
};

export default LogDetailsArea;
