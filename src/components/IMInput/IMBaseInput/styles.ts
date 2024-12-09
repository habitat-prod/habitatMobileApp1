import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { InputVariant } from '../helper';

const useStyle = (theme: ReactNativePaper.Theme, isFocused: boolean, isDisabled: boolean, variant: InputVariant) =>
  StyleSheet.create({
    rootContainer: {
      width: wp('91.11%'),
      alignSelf: 'center',
    },
    contentContainer: {
      flexDirection: 'row',
      ...(variant === 'outlined' && { borderWidth: wp('0.27%') }),
      ...(variant === 'standard' && { borderBottomWidth: wp('0.27%') }),
      borderColor: theme.Palette.IMOther.stroke,
      ...(isFocused && { borderColor: theme.Palette.IMInfo.main }),
      borderRadius: wp('1.11%'),
      ...(isDisabled && { opacity: 0.5 }),
    },
    inputText: {
      flex: 1,
      height: hp('7%'),
      color: theme.Palette.text.primary,
    },
    labelContainer: {
      height: hp('2%'),
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      ...(variant === 'outlined' && { left: wp('3.33%') }),
      ...(variant === 'standard' && { left: wp('1%') }),
      top: -hp('1.15%'),
      backgroundColor: theme.Palette.grey[100],
      zIndex: 9,
    },
    labelText: {
      ...theme.typography.paragraph.p4,
      paddingHorizontal: wp('1.11%'),
      backgroundColor: theme.Palette.background,
      color: isFocused ? theme.Palette.IMInfo.main : theme.Palette.text.secondary,
    },
    helpTitleStyle: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.secondary,
      marginLeft: wp('3.33%'),
      marginTop: hp('0.5%'),
    },
    errorTitleStyle: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.IMError.main,
      marginLeft: wp('3.33%'),
      marginTop: hp('0.5%'),
    },
  });

export default useStyle;
