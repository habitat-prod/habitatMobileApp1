import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    cardContainerStyles: {
      borderRadius: wp('2.22%'),
      borderColor: 'grey',
      backgroundColor: '#F5F5F5',
      paddingTop: wp('2.22%'),
      paddingBottom: wp('3.33%'),
      paddingHorizontal: wp('4.44%'),
      width: wp('43.22%'),
      marginTop: wp('4.44%'),
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
      fontWeight: '500',
      paddingRight: wp('13.88%'),
    },
    imageStyle: {
      height: hp('20%'),
      width: wp('34.5%'),
      marginTop: wp('3.33%'),
      borderRadius: wp('4.44%'),
    },
  });

export default useStyles;
