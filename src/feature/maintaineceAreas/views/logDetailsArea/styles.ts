import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: wp('3.33%'),
      backgroundColor: 'white'
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
    subContainer: {
      flex:1,
    },
    iconContainerStyle: {
      display: 'flex',
      alignSelf: 'flex-start'
    },
  });

export default useStyles;
