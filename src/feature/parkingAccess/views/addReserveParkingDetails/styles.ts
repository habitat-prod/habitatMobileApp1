import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
    },
    paddingTextStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
      marginTop: wp('4.44%'),
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: wp('3.33%'),
      gap: wp('2.22%'),
    },
    btnContainer: {
      display: 'flex',
      width: '94%',
      alignSelf: 'center',
      marginVertical: wp('3.33%'),
    },
    btnTitle: {
      fontSize: 15,
      fontWeight: '600',
    },
    inputStyle: {
      height: hp('5.75%'),
      paddingHorizontal: wp('2.22%'),
      backgroundColor: '#F9F9F9',
      borderRadius: wp('2.77%'),
      display: 'flex',
      alignItems: 'center'
    },
    labelContainer: {
      top: 0,
    },
    imageContainer: {
      width: '100%',
      height: wp('68.05%'),
      position: 'relative',
    },
  });

export default useStyles;
