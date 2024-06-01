import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import IMButton from '../../../../components/IMButton';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import useStyles from './styles';

const ParkingAreaDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const handleReserveParking = () => {
    defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav, {
      screen: MaintainanceAreasScreens.AddReserveParkingDetails,
      params: {},
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconTitleContainer}>
          <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
          <Text style={styles.textStyle}> Live guest parking</Text>
        </View>
        <IMButton
          id='reserve'
          variant='contained'
          title='Reserve parking'
          onClick={handleReserveParking}
          styles={{ container: styles.btnContainer, title: styles.btnTitle }}
        />
      </View>
      <Text>Reserve parking area coming soon... Click on the right side to see the parking details form</Text>
    </SafeAreaView>
  );
};

export default ParkingAreaDetails;
