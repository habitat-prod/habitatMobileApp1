import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: wp('4.44%'),
      backgroundColor: 'white'
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: wp('2.22%'),
      gap: wp('2.22%'),
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '600',
      color: 'black',
    },
    scrollViewContainer: {
      gap: wp('3.33%'),
      paddingTop: wp('4.44%'),
    }
  });

export default useStyles;
