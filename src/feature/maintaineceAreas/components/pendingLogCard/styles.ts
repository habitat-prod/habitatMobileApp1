import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    containerStyle: {
      borderRadius: 8,
      backgroundColor: '#EDEDED',
      paddingHorizontal: 12,
      paddingVertical: 12,
      marginTop: 16,
    },
    cardContainerStyles: {
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 8,
      backgroundColor: '#EDEDED',
      alignItems: 'flex-start'
    },
    title: {
      fontSize: 14,
      fontWeight: '700',
      paddingLeft: 8,
      width: 226,
    },
    dateTitle: {
      fontSize: 14,
      fontWeight: '800',
      paddingLeft: 8,
      paddingTop: 16,
      color: 'black',
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
