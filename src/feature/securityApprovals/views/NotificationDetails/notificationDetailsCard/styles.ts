import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#ECECEC',
      gap: wp('3.33%'),
      borderRadius: wp('2.77%'),
      padding: wp('4.44%'),
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '600',
      color: 'black',
    },
    informationTextStyle: {
      fontSize: 13,
      fontWeight: '400',
      color: 'black',
    },
    infoTextStyle: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: wp('1.11%'),
      gap: wp('1.11%'),
    },
    imageTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp('2.22%'),
    },
    imageContainer: {
      width: wp('9%'),
      height: hp('4.5%'),
      borderRadius: wp('6.66%'),
    },
    denyBtnContainer: {
      borderColor: '#4682B4',
      width: wp('40.38%'),
    },
    allowBtnContainer: {
      width: wp('40.38%'),
      backgroundColor: '#4682B4'
    },
    denyTitle: {
      color: 'black',
    },
    allowTitle: {
      color: 'white',
    },
    btnContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  });

export default useStyles;
