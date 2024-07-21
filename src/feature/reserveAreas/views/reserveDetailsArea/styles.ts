import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      display: 'flex',
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp('4.44%'),
      gap: wp('2.22%'),
    },
    iconSvg: {
      height: wp('11.11%'),
      width: wp('11.11%'),
    },
    imageContainer: {
      width: wp('100%'),
      height: wp('55%'),
    },
    titleContainer: {
      fontSize: 14,
      fontWeight: '500',
      color: 'black'
    },
    scrollviewContainer: {
      gap: wp('2%'),
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '600',
      color: 'black'
    },
    timeText: {
      minWidth: wp('25%'),
      textAlign: 'center',
      paddingTop: wp('3.33%'),
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 20,
      color: 'black'
    },
    miniContainer: { 
      display: 'flex', 
      borderWidth: wp('0.27%'), 
      borderColor:'#BABABA', 
      padding: wp('3.33%'),
    },
    durationContainer: {
      display: 'flex', 
      flexDirection: 'row', 
      alignSelf: 'center',
    },
    durationText: {
      color: 'black', 
      fontWeight: '500', 
      fontSize: 18, 
      alignSelf: 'center',
    },
    iconStyle: {
      width: wp('4.16%'),
      height: hp('1.90%'),
    },
    iconContainerStyle: {
      borderWidth: wp('0.27%'),
      borderRadius: wp('5.55%'),
      padding: wp('1.11%'),
    },
    disabledIconContainerStyle: {
      borderWidth: wp('0.27%'),
      borderRadius: wp('5.55%'),
      padding: wp('1.11%'),
      borderColor: '#D3D3D3',
    },
  });

export default useStyles;
