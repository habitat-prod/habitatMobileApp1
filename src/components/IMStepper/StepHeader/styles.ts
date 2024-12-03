import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = (theme: ReactNativePaper.Theme, progress: number) =>
  StyleSheet.create({
    headerContainer: {
      elevation: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
    },
    progressBarContainer: {
      height: hp('0.5%'),
      backgroundColor: theme.Palette.IMPrimary.background,
    },
    progressBar: {
      height: hp('0.5%'),
      width: wp(`${progress}%`),
      backgroundColor: theme.Palette.IMPrimary.main,
      borderTopRightRadius: wp('1.38%'),
      borderBottomRightRadius: wp('1.38%'),
    },
    subHeaderContainer: {
      padding: wp('4.44%'),
      backgroundColor: theme.Palette.background,
    },
    stepTitle: {
      ...theme.typography.paragraph.p3,
      color: theme.Palette.text.hint,
    },
    labelPairContainer: {
      minHeight: wp('8.88%'),
      justifyContent: 'flex-end',
    },
    primaryText: {
      ...theme.typography.label.l2,
      color: theme.Palette.grey[700],
    },
    secondaryText: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.hint,
    },
  });
