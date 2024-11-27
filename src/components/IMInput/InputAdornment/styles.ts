import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyle = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginHorizontal: wp('1.1%'),
    },
  });

export default useStyle;
