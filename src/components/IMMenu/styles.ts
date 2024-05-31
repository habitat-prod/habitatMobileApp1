import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      width: wp('27.7%'),
      height: hp('6.5%'),
      justifyContent: 'center',
    },
    disabled: { opacity: 0.4 },
    menuButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginLeft: wp('2.5%'),
    },
    text: {
      ...theme.typography.paragraph.p2,
    },
  });

export default useStyles;
