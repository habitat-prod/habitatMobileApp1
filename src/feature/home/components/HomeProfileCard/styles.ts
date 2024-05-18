import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    textStyle: {
      display: 'flex',
      alignSelf: 'center',
      marginTop: hp('50%'),
    },
    cardContainerStyles: {
      borderRadius: 8,
      backgroundColor: '#E3E3E7',
      height: 254,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      width: 120,
      fontSize: 15,
      fontWeight: '600',
    },
    imageStyle: {
      height: 170,
      width: 130,
      marginTop: 12,
      borderRadius: 16,
      marginLeft: 4,
    },
  });

export default useStyles;
