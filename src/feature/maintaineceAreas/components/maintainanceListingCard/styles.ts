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
      borderRadius: 8,
      borderWidth: 0.6,
      borderColor: 'grey',
      backgroundColor: 'white',
      height: 174,
      width: 117,
      paddingHorizontal: 8,
      paddingVertical: 8,
      marginTop: 16,
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 12,
      fontWeight: '500',
    },
    imageStyle: {
      height: 129,
      width: 99.5,
      marginTop: 8,
      borderRadius: 16,
    },
  });

export default useStyles;
