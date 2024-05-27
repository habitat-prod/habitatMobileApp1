import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      height: hp('6.87%'),
      marginTop: wp('4.44%%'),
      backgroundColor: '#ECECEC',
      borderRadius: wp('2.22%'),
      flexDirection: 'row',
      padding: wp('3.33%'),
    },
    imageContainer: {
      width: wp('16.88%'),
      height: hp('4%'),
      borderRadius: wp('1.11%'),
    },
    textStyle: {
      paddingLeft: wp('2.22%'),
      alignSelf: 'center',
      color: 'black',
      fontSize: 14,
      fontWeight: '500',
    },
    iconContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      gap: wp('3.33%'),
    }
  });

export default useStyles;
