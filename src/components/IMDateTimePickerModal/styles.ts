import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme, isDisabled?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: wp('3.15%'),
    },
    inputContainer: {
      paddingHorizontal: wp('0.5%'),
      ...(!isDisabled && { opacity: 1 }),
    },
  });

export default useStyles;
