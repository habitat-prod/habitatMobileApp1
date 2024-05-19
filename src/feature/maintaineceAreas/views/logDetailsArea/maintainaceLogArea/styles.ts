import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    cardContainerStyles: {
      borderRadius: 8,
      backgroundColor: 'white',
      height: 174,
      width: 117,
      paddingHorizontal: 8,
      paddingVertical: 8,
      marginTop: 16,
    },
    title: {
      fontSize: 12,
      fontWeight: '500',
    },
    imageStyle: {
      height: 129,
      width: 99.5,
      marginTop: 8,
      borderRadius: 16,
    },
  });

export default useStyles;
