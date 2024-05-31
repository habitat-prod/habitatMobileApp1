import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    wrapper: {
      height: hp('4.5%'),
      margin: wp('3.33%'),
    },
    searchContainer: {
      height: hp('4.5%'),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp('3.33%'),
      borderWidth: wp('0.27%'),
      borderRadius: wp('1.66%'),
      backgroundColor: theme.Palette.background,
    },
    iconstyle: {
      maxHeight: hp('5%'),
      paddingRight: wp('1%'),
      marginTop: wp('5%'),
      borderRadius: wp('4%'),
    },
    searchImg: {
      width: wp('5.55%'),
      height: wp('5.55%'),
      marginRight: wp('1.11%'),
    },
  });

export default useStyles;
