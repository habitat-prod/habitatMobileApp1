import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IMIcon from '../../../../components/IMIcon';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMButton from '../../../../components/IMButton';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import Correct from '../../../../assets/svgv1/Correct';
import useStyles from './styles';

interface IReservedConfirmation {
  slotNumber?: string;
}

const ReservedConfirmation: React.FC<IReservedConfirmation> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const handleReserveParking = () => {
    defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
      screen: MaintainanceAreasScreens.HomeProfile,
      params: {},
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textStyle}>Reserved</Text>
        <IMIcon testId='ArrowBackFilled' iconSvg={<Correct />} onClick={defaultNavigation.goBack} iconStyle={{ width: 24, height: 24 }} />
      </View>
      <Text style={{ textAlign: 'center' }}>Guest parking spot {props.slotNumber ?? 'A04'} reserved successfully!!!</Text>
      <IMButton
        id='reserve'
        variant='contained'
        title='Go to home page'
        onClick={handleReserveParking}
        styles={{ container: styles.btnContainer, title: styles.btnTitle }}
      />
    </SafeAreaView>
  );
};

export default ReservedConfirmation;
