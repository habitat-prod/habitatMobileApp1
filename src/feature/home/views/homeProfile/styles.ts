import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: wp('2.22%'),
      gap: wp('3.33%'),
    },
    subContainer: {
      display: 'flex',
      alignSelf: 'flex-end',
      paddingTop: wp('4.44%'),
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
    card: {
      marginBottom: wp('4.44%'),
    },
  });

export default useStyles;
