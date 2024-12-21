import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    textStyle: {
      display: 'flex',
      alignSelf: 'center',
      marginTop: hp('50%'),
    },
    cardContainerStyles: {
      borderRadius: wp('2.22%'),
      backgroundColor: '#E3E3E7',
      // height: hp('31.75%'),
      width: wp('45%'),
      paddingHorizontal: wp('4.44%'),
      paddingVertical: wp('3.33%'),
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      width: wp('30%'),
      fontSize: 15,
      fontWeight: '600',
    },
    imageStyle: {
      height: hp('21.25%'),
      width: wp('35.11%'),
      marginTop: wp('4.44%'),
      borderRadius: wp('4.44%'),
    },
  });

export default useStyles;
