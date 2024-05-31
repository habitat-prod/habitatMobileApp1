import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ButtonVariant, ButtonSize } from './helper';

const useStyles = (theme: ReactNativePaper.Theme, variant: ButtonVariant, size: ButtonSize, disabled: boolean) =>
  StyleSheet.create({
    container: {
      ...(size === 'xLarge' && { width: wp('30%'), height: hp('6%') }),
      ...(size === 'large' && { width: wp('25.27%'), height: hp('5%') }),
      ...(size === 'medium' && { width: wp('24.16%'), height: hp('4.5%') }),
      ...(size === 'small' && { width: wp('15.55%'), height: hp('4%') }),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: variant === 'outlined' ? wp('0.277') : 0,
      borderRadius: wp('1.11%'),
      borderColor: disabled ? theme.Palette.grey['A800'] : theme.Palette.IMPrimary.border,
      backgroundColor: variant === 'contained' ? theme.Palette.IMPrimary.main : 'transparent',
      ...(disabled && variant === 'contained' && { backgroundColor: theme.Palette.IMActions.disabledBackground }),
      ...(disabled && variant === 'outlined' && { borderColor: theme.Palette.IMActions.disabledBackground }),
    },
    defaultTitleStyle: {
      ...((size === 'xLarge' || size === 'large') && theme.typography.label.l2),
      ...(size === 'medium' && theme.typography.label.l3),
      ...(size === 'small' && theme.typography.label.l4),
      color: variant === 'contained' ? theme.Palette.IMPrimary.contrastText : theme.Palette.IMPrimary.main,
      paddingHorizontal: wp('1.11%'),
      ...(disabled && { color: theme.Palette.IMActions.disabled }),
    },
  });

export default useStyles;
