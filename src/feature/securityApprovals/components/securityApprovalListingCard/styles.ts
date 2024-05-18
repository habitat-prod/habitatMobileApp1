import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      height: 55,
      margin: 16,
      backgroundColor: '#ECECEC',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'row',
      padding: 12,
    },
    imageContainer: {
      width: 68,
      height: 32,
      borderRadius: 8,
    },
    textStyle: {
      paddingLeft: 8,
      alignSelf: 'center',
      color: 'black',
      fontSize: 14,
      fontWeight: '500',
    },
    iconContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      gap: 12,
    }
  });

export default useStyles;
