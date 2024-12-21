import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    defaultContainer: {
      flex: 0,
      alignItems: 'flex-start',
      padding: wp('1%'),
    },
    title: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.text.primary,
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
