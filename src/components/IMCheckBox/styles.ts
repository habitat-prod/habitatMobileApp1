import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    defaultContainer: {
      alignItems: 'flex-start',
      paddingVertical: wp('1.11%'),
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flexDirection: 'column',
      paddingRight: wp('3.33%'),
    },
    title: {
      ...theme.typography.paragraph.p1,
    },
    label: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.text.primary,
    },
    subLabel: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.disabled,
    },
    disabledLabelText: {
      color: theme.Palette.grey['700'],
    },
    helperText: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.text.primary,
    },
    errorText: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.IMError.main,
    },
  });

export default useStyles;
