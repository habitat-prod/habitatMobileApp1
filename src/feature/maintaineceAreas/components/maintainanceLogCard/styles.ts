import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      //   flex: 1,
    },
    textStyle: {
      //   display: 'flex',
      //   alignSelf: 'center',
      //   marginTop: hp('50%'),
    },
    cardContainerStyles: {
      display: 'flex',
      flexDirection: 'row',
      borderRadius: 8,
      backgroundColor: '#EDEDED',
      paddingHorizontal: 12,
      paddingVertical: 12,
      marginTop: 16,
      alignItems: 'center'
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 14,
      fontWeight: '700',
      paddingLeft: 8,
    },
    imageStyle: {
      height: 72,
      width: 113,
      // borderRadius: 16,
    },
  });

export default useStyles;
