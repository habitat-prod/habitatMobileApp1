import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    loaderStyle: {
      paddingTop: wp('1%'),
    },
    scrollToTopContainerStyle: {
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 9,
      top: wp('4.44%'),
      height: hp('4%'),
      alignSelf: 'center',
      borderRadius: wp('27.77%'),
      backgroundColor: theme.Palette.IMPrimary.main,
      shadowColor: theme.Palette.IMOther.black,
      shadowOffset: { width: wp('0%'), height: hp('0.27%') },
      elevation: 5,
    },
    scrollToTopTextStyle: {
      ...theme.typography.label.l4,
    },
    scrollToTopIconStyle: {
      width: wp('4.44%'),
      height: wp('4.44%'),
    },
  });

export default useStyles;
