import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
      marginVertical: 0,
      gap: 12,
    },
    textStyle: {
      display: 'flex',
      alignSelf: 'flex-start',
      paddingTop: '10%',
      color: 'black',
      fontSize: 14,
      fontWeight: '500',
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    card: {
      width: '48%',
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 16,
    }
  });

export default useStyles;
