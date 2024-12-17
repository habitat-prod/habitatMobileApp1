import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: wp('3.33%'),
    },
    otpBoxes: {
      margin: wp('0.6%'),
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputStyle: {
      ...theme.typography.heading.h6,
      height: hp('8.25%'),
      width: wp('12.55%'),
      textAlign: 'center',
      textAlignVertical: 'center',
      lineHeight: hp('5%'),
      borderWidth: wp('0.3%'),
      borderColor: theme.Palette.IMOther.stroke,
      color: theme.Palette.text.primary,
      backgroundColor: '#F6F6F6',
    },
    hiddenInputStyle: {
      position: 'absolute',
      width: 0,
      height: 0,
    },
    errorText: {
      ...theme.typography.paragraph.p4,
      marginTop: wp('3.33%'),
      textAlign: 'center',
      color: theme.Palette.IMError.dark,
    },
  });

export default useStyles;
