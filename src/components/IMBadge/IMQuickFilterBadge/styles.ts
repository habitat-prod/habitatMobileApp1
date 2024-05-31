import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { QuickFilterBadgeStatus } from '../helper';

const useStyles = (theme: ReactNativePaper.Theme, status: QuickFilterBadgeStatus) =>
  StyleSheet.create({
    quickFilterCardContainer: {
      height: hp('3.25%'),
      minWidth: wp('37%'),
      ...(status === QuickFilterBadgeStatus.Active && {
        borderColor: theme.Palette.IMOther.border,
      }),
      ...(status === QuickFilterBadgeStatus.Inactive && {
        borderColor: theme.Palette.IMOther.divider,
      }),
    },
    textStyle: {
      ...theme.typography.subHeading.sh4,
      minWidth: wp('33%'),
      textAlign: 'center',
      ...(status === QuickFilterBadgeStatus.Active && {
        color: theme.Palette.IMPrimary.main,
      }),
      ...(status === QuickFilterBadgeStatus.Inactive && {
        color: theme.Palette.text.secondary,
      }),
    },
  });

export default useStyles;
