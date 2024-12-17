import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const useStyle = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    defaultContainerStyle: {
      maxWidth: wp('26.11%'),
      minWidth: wp('7.22%'),
      minHeight: hp('4%'),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      padding: wp('1.11 %'),
      borderRadius: wp('1.66%'),
      borderWidth: wp('0.277%'),
      borderColor: theme.Palette.IMPrimary.main,
      backgroundColor: theme.Palette.IMPrimary.main,
    },
    solidSecondary: {
      borderColor: theme.Palette.grey[100],
      backgroundColor: theme.Palette.grey[100],
    },
    outline: {
      backgroundColor: theme.Palette.background,
    },
    outlineText: {
      color: theme.Palette.IMPrimary.main,
    },
    defaultText: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.background,
    },

    secondaryText: {
      color: theme.Palette.IMActions.active,
    },
    small: {
      height: hp('3%'),
    },
  });
