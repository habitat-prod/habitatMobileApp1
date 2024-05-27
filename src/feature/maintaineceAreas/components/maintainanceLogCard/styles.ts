import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    cardContainerStyles: {
      display: 'flex',
      flexDirection: 'row',
      borderRadius: wp('2.22%'),
      backgroundColor: '#EDEDED',
      paddingHorizontal: wp('3.33%'),
      paddingVertical: wp('3.33%'),
      marginTop: wp('4.44%'),
      alignItems: 'center'
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
      fontWeight: '700',
      paddingLeft: 8,
    },
    imageStyle: {
      height: hp('9%'),
      width: wp('29%'),
    },
  });

export default useStyles;
