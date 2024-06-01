import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      padding: wp('3.33%'),
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: wp('2.22%'),
      gap: wp('1.11%'),
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
    },
    tabStyle: {
      flex: 1,
      marginTop: wp('2.22%')
    }
  });

export default useStyles;
