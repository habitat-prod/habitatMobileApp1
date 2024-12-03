import { StyleSheet } from 'react-native';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    radioButtonTitle: {
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
