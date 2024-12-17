import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { FabSize, FabVariant } from './helper';

export const useStyle = (theme: ReactNativePaper.Theme, size: FabSize, variant: FabVariant) => {
  return StyleSheet.create({
    container: {
      ...(variant === 'round' &&
        (size === 'large'
          ? {
              width: wp('15.55%'),
              height: hp('7%'),
            }
          : {
              width: wp('13.33%'),
              height: hp('6%'),
            })),
      ...(variant === 'extended' && (size === 'large' ? { height: hp('6%') } : { height: hp('5%') })),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      ...(variant === 'extended' && { paddingHorizontal: wp('4.44%') }),
      ...(variant === 'round' && size === 'large' ? { borderRadius: wp('7.77%') } : { borderRadius: wp('6.67%') }),
      backgroundColor: theme.Palette.IMPrimary.main,
      zIndex: 999,
    },
    disabledContainer: {
      backgroundColor: theme.Palette.grey[300],
    },
    title: {
      ...theme.typography.subHeading[size === 'large' ? 'sh2' : 'sh3'],
      color: theme.Palette.background,
      marginLeft: wp('2.5%'),
    },
    disabledTitle: {
      color: theme.Palette.grey[400],
    },
  });
};
