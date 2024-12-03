import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AlertType, AlertVariant } from './helper';

const useStyles = (theme: ReactNativePaper.Theme, type: AlertType, variant: AlertVariant) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: wp('1.11%'),
      paddingHorizontal: wp('2.22%'),
      borderRadius: wp('1.11%'),
      ...(variant === 'outlined' && { borderWidth: wp('0.27%') }),
    },
    ['error' as AlertType]: {
      ...(variant === 'filled' && { backgroundColor: theme.Palette.IMError.main, color: theme.Palette.background }),
      ...(variant === 'outlined' && { color: theme.Palette.IMError.textDark, borderColor: theme.Palette.IMError.main }),
      ...(variant === 'standard' && {
        backgroundColor: theme.Palette.IMError.lightBg,
        color: theme.Palette.IMError.textDark,
      }),
    },
    ['warning' as AlertType]: {
      ...(variant === 'filled' && { backgroundColor: theme.Palette.IMWarning.main, color: theme.Palette.background }),
      ...(variant === 'outlined' && {
        color: theme.Palette.IMWarning.textDark,
        borderColor: theme.Palette.IMWarning.main,
      }),
      ...(variant === 'standard' && {
        backgroundColor: theme.Palette.IMWarning.lightBg,
        color: theme.Palette.IMWarning.textDark,
      }),
    },
    ['info' as AlertType]: {
      ...(variant === 'filled' && { backgroundColor: theme.Palette.IMInfo.main, color: theme.Palette.background }),
      ...(variant === 'outlined' && { color: theme.Palette.IMInfo.textDark, borderColor: theme.Palette.IMInfo.main }),
      ...(variant === 'standard' && {
        backgroundColor: theme.Palette.IMInfo.lightBg,
        color: theme.Palette.IMInfo.textDark,
      }),
    },
    ['success' as AlertType]: {
      ...(variant === 'filled' && { backgroundColor: theme.Palette.IMSuccess.main, color: theme.Palette.background }),
      ...(variant === 'outlined' && {
        color: theme.Palette.IMSuccess.textDark,
        borderColor: theme.Palette.IMSuccess.main,
      }),
      ...(variant === 'standard' && {
        backgroundColor: theme.Palette.IMSuccess.lightBg,
        color: theme.Palette.IMSuccess.textDark,
      }),
    },
    textContainer: {
      flex: 1,
      paddingVertical: wp('2.22%'),
    },
    title: {
      ...theme.typography.subHeading.sh2,
    },
    titleHidden: {
      display: 'none',
    },
    content: {
      ...theme.typography.paragraph.p3,
    },
    actionContainer: {
      flex: 0.5,
      justifyContent: 'space-evenly',
      marginRight: wp('1.11%'),
      paddingVertical: wp('2.22%'),
    },
    actionTitle: {
      flex: 1,
    },
    icon: {
      width: wp('6.66%'),
      height: wp('10%'),
      marginHorizontal: wp('2.22%'),
    },
    closeIcon: {
      width: wp('5.55%'),
      height: wp('5.55%'),
    },
  });

export default useStyles;
