import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: wp('4.44%'),
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: wp('3.33%'),
    },
    iconTitleContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    btnContainer: {
      backgroundColor: '#4682B4', 
      width: wp('40%'),
    },
    btnTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: 'white',
    }
  });

export default useStyles;
