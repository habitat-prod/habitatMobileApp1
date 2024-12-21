import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wp('4.44%'),
      backgroundColor: 'white',
      paddingBottom: wp('4.44%'),
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: wp('3.33%'),
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

export default useStyles;
