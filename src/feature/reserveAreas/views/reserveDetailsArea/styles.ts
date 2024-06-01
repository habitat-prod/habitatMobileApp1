import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      display: 'flex',
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp('4.44%'),
      gap: wp('2.22%'),
    },
    iconSvg: {
      height: wp('11.11%'),
      width: wp('11.11%'),
    },
    imageContainer: {
      width: '100%',
      height: wp('68.05%'),
    },
    titleContainer: {
      fontSize: 14,
      fontWeight: '500',
      color: 'black'
    },
    scrollviewContainer: {
      paddingTop: wp('2%'),
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: '600',
      color: 'black'
    },
  });

export default useStyles;
