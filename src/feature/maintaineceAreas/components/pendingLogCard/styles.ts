import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    containerStyle: {
      borderRadius: wp('2.22%'),
      backgroundColor: '#EDEDED',
      paddingHorizontal: wp('3.33%'),
      paddingVertical: wp('3.33%'),
      marginTop: wp('4.44%'),
    },
    cardContainerStyles: {
      display: 'flex',
      flexDirection: 'row',
      borderRadius: wp('2.22%'),
      backgroundColor: '#EDEDED',
      alignItems: 'flex-start'
    },
    title: {
      fontSize: 14,
      fontWeight: '700',
      paddingLeft: wp('2.22%'),
      width: wp('62.77%'),
    },
    dateTitle: {
      fontSize: 14,
      fontWeight: '800',
      paddingLeft: wp('2.22%'),
      paddingTop: wp('4.44%'),
      color: 'black',
    },
    iconContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      gap: wp('3.33%'),
    }
  });

export default useStyles;
