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
    textContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#EAEAEA',
      marginHorizontal: wp('4.44%'),
      marginVertical: wp('3.33%'),
      padding: wp('2.22%'),
    },
    primaryText: {
      fontSize: 14,
      fontWeight: '700',
    },
    secondaryText: {
      fontSize: 12,
      fontWeight: '500',
      color: 'black',
      paddingTop: wp('4.44%'),
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
  });

export default useStyles;
