import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.Palette.background,
    },
    videoPlayer: {
      height: hp('50%'),
      width: wp('90%'),
    },
    audioPlayer: {
      width: wp('90%'),
    },
  });

export default useStyles;
