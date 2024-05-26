import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    cardContainerStyles: {
      borderRadius: 8,
      borderColor: 'grey',
      backgroundColor: '#F5F5F5',
      paddingTop: 8,
      paddingBottom: 12,
      paddingHorizontal: 16,
      width: 170,
      marginTop: 16,
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
      fontWeight: '500',
      paddingRight: 50,
    },
    imageStyle: {
      height: 160,
      width: 140,
      marginTop: 12,
      borderRadius: 16,
    },
  });

export default useStyles;
