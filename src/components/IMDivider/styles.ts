import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { DividerVariant } from './helper';

export const useStyles = (theme: ReactNativePaper.Theme, variant: DividerVariant) => StyleSheet.create({
  divider: {
    width: '100%',
    borderWidth: wp('0.14%'),
    borderRadius: wp('0.25%'),
    color: theme.Palette.text.secondary,
    alignSelf: 'center',
    ...(variant === 'dashed' && { borderStyle: 'dashed' }),
    ...(variant === 'dotted' && { borderStyle: 'dotted' }),
    ...(variant === 'solid' && { borderStyle: 'solid' }),
  },
});
