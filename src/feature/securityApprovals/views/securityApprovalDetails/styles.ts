import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: wp('4.44%'),
      backgroundColor: 'white'
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
