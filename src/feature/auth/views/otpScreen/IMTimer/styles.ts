import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const useStyles = (theme: any) =>
  StyleSheet.create({
    buttonStyle: {
      width: wp('40%'),
      height: hp('5%'),
    },
    titleStyle: {
      color: '#3266AE',
      fontWeight: '500',
      minHeight: hp('5%'),
    },
    contentStyle: {
      width: wp('40%'),
      height: hp('5%'),
    },
    timerStyle: {
      ...theme.typography.label.l3,
      color: theme.Palette.text.disabled,
    },
    labelThreeTextStyle: {
      ...theme.typography.label.l3,
      fontSize: wp('3.7%'),
      fontWeight: '600',
      textAlign: 'center',
      color: '#3266AE',
    },
  });

export default useStyles;
