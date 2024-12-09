import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    textStyle: {
      display: 'flex',
      alignSelf: 'center',
      marginTop: hp('50%'),
    },
  });

export default useStyles;
