import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    textContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#EAEAEA',
      marginHorizontal: 16,
      marginVertical: 12,
      padding: 8
    },
    primaryText: {
      fontSize: 14,
      fontWeight: '700',
    },
    secondaryText: {
      fontSize: 12,
      fontWeight: '500',
      color: 'black',
      paddingTop: 16,
    },
    iconContainer: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 15,
      top: 20,
      zIndex: 1,
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 20,
      alignItems: 'center'
    },
    iconSvg: {
      height: 40,
      width: 40
    },
    imageContainer: {
      width: '100%',
      height: 245,
      position: 'relative',
    },
    titleContainer: {
      backgroundColor: 'black',
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      position: 'absolute',
      top: 225,
      zIndex: 1,
      color: 'white'
    },
    scrollviewContainer: {
      paddingTop: 50,
    },
  });

export default useStyles;
