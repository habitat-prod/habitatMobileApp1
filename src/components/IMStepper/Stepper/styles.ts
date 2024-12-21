import { StyleSheet } from 'react-native';

export const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    stepperContainer: {
      display: 'flex',
      flex: 1,
      backgroundColor: theme.Palette.background,
    },
    container: {
      flex: 1,
    },
  });
