import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      width: wp('100%'),
      shadowOffset: { width: 0, height: 30 },
      shadowOpacity: 0.05,
      shadowRadius: 15,
      elevation: 15,
      backgroundColor: theme.Palette.background,
      zIndex: 999,
    },
    containerSection: {
      height: hp('7.5%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: wp('4.44%'),
    },
    leftHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backBtn: {
      width: wp('6.66%'),
      height: wp('6.66%'),
      marginRight: wp('2.22%'),
    },
    title: {
      ...theme.typography.subHeading.sh2,
      color: theme.Palette.text.primary,
    },
    defaultHeaderRightContainer: {
      marginRight: wp('2%'),
    },
    customBottomContainer: {
      height: hp('7.5%'),
      alignItems: 'center',
    },
  });
