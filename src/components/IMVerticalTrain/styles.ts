import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    rootContainer: {
      paddingHorizontal: wp('4.44%'),
      backgroundColor: theme.Palette.background,
    },
    container: {
      gap: wp('3.33%'),
      marginLeft: wp('1.94%'),
      paddingVertical: wp('5.55%'),
      paddingLeft: wp('5.55%'),
      borderLeftWidth: wp('0.27%'),
      borderLeftColor: theme.Palette.grey[400],
    },
    circleIcon: {
      position: 'absolute',
      height: wp('4.44%'),
      width: wp('4.44%'),
      left: wp('4.16%'),
      top: wp('6.11%'),
      backgroundColor: theme.Palette.background,
    },
    title: {
      ...theme.typography.paragraph.p3,
      color: theme.Palette.text.primary,
    },
  });
