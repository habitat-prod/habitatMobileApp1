import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp('4.44%'),
      gap: wp('2.22%'),
    },
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
      fontSize: 14,
      fontWeight: '500',
      color: 'black',
    },
    scrollviewContainer: {
      paddingVertical: wp('11.88%'),
      backgroundColor: 'white',
      gap: wp('4.44%')
    },
    subtitleText: {
      fontSize: 14,
      fontWeight: '700',
      color: 'black',
      paddingHorizontal: wp('5.55%'),
    },
    inputStyle: {
      minHeight: hp('17.5%'),
      paddingHorizontal: wp('2.22%'),
      backgroundColor: 'pink'
    },
    labelContainer: {
      top: 0,
    },
    pickerContainer: {
      minHeight: hp('6.25%'),
      borderRadius: wp('2.77%'),
      backgroundColor: '#F2F2F2',
    },
    btnContainer: {
      display: 'flex',
      width: '94%',
      alignSelf: 'center',
      marginVertical: wp('3.33%'),
    }
  });

export default useStyles;
