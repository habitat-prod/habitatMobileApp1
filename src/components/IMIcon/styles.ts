import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconSize } from './helper';

const useStyles = (theme: ReactNativePaper.Theme, size: IconSize) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
    },
    iconStyle: {
      ...(size === 'small' && {
        width: wp('4.39%'),
        height: wp('4.39%'),
      }),
      ...(size === 'medium' && {
        width: wp('5.55%'),
        height: wp('5.55%'),
      }),
      ...(size === 'large' && {
        width: wp('6.94%'),
        height: wp('6.94%'),
      }),
    },
    hitSlop: {
      top: hp('1.25%'),
      bottom: hp('1.25%'),
      left: wp('2.77%'),
      right: wp('2.77%'),
    },
  });

export default useStyles;
