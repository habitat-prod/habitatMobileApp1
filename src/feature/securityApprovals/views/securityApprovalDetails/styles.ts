import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
    },
    tabStyle: {
      flex: 1, 
      marginTop: 8 
    }
  });

export default useStyles;
