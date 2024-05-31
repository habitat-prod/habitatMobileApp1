import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme, isDisabled?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: wp('91.11%'),
      alignSelf: 'center',
    },
    inputContainer: {
      paddingHorizontal: wp('3.33%'),
      ...(!isDisabled && { opacity: 1 }),
    },
  });

export default useStyles;
