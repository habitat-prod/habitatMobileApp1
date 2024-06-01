import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: wp('4.44%'),
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 24,
      fontWeight: '700',
      color: 'black',
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      paddingVertical: wp('3.33%'),
      gap: wp('3.33%'),
    },
    btnContainer: {
      display: 'flex',
      width: '94%',
      alignSelf: 'center',
      backgroundColor: '#4682B4',
      marginTop: wp('12%'),
    },
    btnTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: 'white',
    }
  });

export default useStyles;
