import { StyleSheet } from 'react-native';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContent: {
      ...theme.typography.subHeading.sh1,
      color: theme.Palette.text.primary,
    }
  });

export default useStyles;
