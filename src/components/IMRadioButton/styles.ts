import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme, selected: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    radioButtonTitle: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.text.primary,
    },
    radioButtonInnerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioButton: {
      width: wp('5.55%'),
      height: wp('5.55%'),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp('5.55%'),
      borderWidth: wp('0.5%'),
      borderColor: selected ? theme.Palette.IMPrimary.main : theme.Palette.grey['700'],
    },
    disabledRadioButton: {
      borderColor: theme.Palette.IMActions.disabledBackground,
    },
    disabledSelectedButton: {
      backgroundColor: theme.Palette.IMActions.disabledBackground,
    },
    selectedRadioButton: {
      width: wp('3.33%'),
      height: wp('3.33%'),
      borderRadius: wp('3.33%'),
      backgroundColor: theme.Palette.IMPrimary.main,
    },
    radioButtonLabel: {
      ...theme.typography.paragraph.p2,
      marginLeft: wp('2.22%'),
      color: selected ? theme.Palette.IMPrimary.main : theme.Palette.text.primary,
    },
    disabledRadioButtonLabel: {
      color: theme.Palette.grey['700'],
    },
    disableSelectedText: {
      color: theme.Palette.text.disabled,
    },
    radioButtonContentContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: wp('3.33%'),
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
