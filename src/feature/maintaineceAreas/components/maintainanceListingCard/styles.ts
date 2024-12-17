import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    cardContainerStyles: {
      borderRadius: wp('2.22%'),
      borderWidth: wp('0.16%'),
      borderColor: 'grey',
      backgroundColor: 'white',
      height: hp('21.75%'),
      paddingHorizontal: wp('2.22%'),
      paddingVertical: wp('2.22%'),
      marginTop: wp('4.44%'),
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 12,
      fontWeight: '500',
    },
    imageStyle: {
      height: hp('16.12%'),
      width: wp('23%'),
      marginTop: wp('2.22%'),
      borderRadius: wp('4.44%'),
    },
  });

export default useStyles;
