import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    textContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#EAEAEA',
      marginHorizontal: wp('4.44%'),
      marginVertical: wp('3.33%'),
      padding: wp('2.22%'),
    },
    primaryText: {
      fontSize: 14,
      fontWeight: '700',
    },
    secondaryText: {
      fontSize: 12,
      fontWeight: '500',
      color: 'black',
      paddingTop: wp('4.44%'),
    },
    iconContainer: {
      position: 'absolute',
      backgroundColor: 'white',
      left: wp('4.16%'),
      top: hp('2.25%'),
      zIndex: 1,
      borderWidth: 1,
      paddingHorizontal: wp('2.22%'),
      paddingVertical: wp('0.55%'),
      borderRadius: wp('5.55%'),
      alignItems: 'center'
    },
    iconSvg: {
      height: wp('11.11%'),
      width: wp('11.11%'),
    },
    imageContainer: {
      width: '100%',
      height: wp('68.05%'),
      position: 'relative',
    },
    titleContainer: {
      backgroundColor: 'black',
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: wp('3.33%'),
      paddingHorizontal: wp('6.66%'),
      borderRadius: wp('2.77%'),
      position: 'absolute',
      top: hp('30.12%'),
      zIndex: 1,
      color: 'white'
    },
    scrollviewContainer: {
      paddingTop: wp('13.88%'),
    },
  });

export default useStyles;
