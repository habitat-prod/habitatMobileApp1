import { StyleSheet } from 'react-native';

import { LabelPairVariant } from './helper';

const useStyles = (theme: ReactNativePaper.Theme, variant: LabelPairVariant) =>
  StyleSheet.create({
    defaultContainer: {
      flexDirection: variant === 'horizontal' ? 'row' : 'column',
      justifyContent: variant === 'horizontal' ? 'space-between' : 'space-around',
    },
    defaultPrimaryText: {
      ...theme.typography.paragraph.p4,
      color: variant === 'horizontal' ? theme.Palette.text.secondary : theme.Palette.text.primary,
    },
    defaultSecondaryText: {
      ...theme.typography.paragraph.p4,
      color: variant === 'horizontal' ? theme.Palette.text.primary : theme.Palette.text.secondary,
    },
  });

export default useStyles;
