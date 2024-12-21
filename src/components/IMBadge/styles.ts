import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { BadgeVariant } from './helper';

export const useStyles = (theme: ReactNativePaper.Theme, variant: BadgeVariant) =>
  StyleSheet.create({
    defaultContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'transparent',
      ...(variant === 'outlined' && {
        borderWidth: wp('0.37%'),
        borderColor: theme.Palette.text.secondary,
      }),
      ...(variant === 'solid' && {
        backgroundColor: theme.Palette.IMPrimary.main,
      }),
      borderRadius: wp('1%'),
    },
    label: {
      ...theme.typography.label.l3,
      color: theme.Palette.background,
      ...(variant === 'outlined' && {
        color: theme.Palette.grey[700],
      }),
      ...(variant === 'text' && {
        color: theme.Palette.IMInfo.main,
      }),
      paddingHorizontal: wp('1%'),
    },
  });
