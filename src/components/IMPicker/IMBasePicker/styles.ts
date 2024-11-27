import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    rootContainer: {
      width: wp('91.11%'),
      alignSelf: 'center',
    },
    pickerContainer: {
      minHeight: hp('7%'),
      justifyContent: 'center',
      borderRadius: wp('1.11%'),
      borderWidth: wp('0.27%'),
      borderColor: theme.Palette.IMOther.stroke,
    },
    focusedPickerContainer: {
      borderWidth: wp('0.55%'),
      borderColor: theme.Palette.IMPrimary.main,
    },
    errorPickerContainer: {
      borderColor: theme.Palette.IMPrimary.main,
    },
    disabledPickerContainer: {
      opacity: 0.5,
    },
    labelContainer: {
      left: wp('3.33%'),
      top: -hp('1.15%'),
      height: hp('2%'),
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.Palette.background,
      zIndex: 9,
    },
    labelText: {
      ...theme.typography.paragraph.p4,
      paddingHorizontal: wp('1.11%'),
      color: theme.Palette.text.secondary,
    },
    chipsContainerStyle: {
      maxWidth: wp('83.3%'),
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginVertical: hp('1.5%'),
    },
    chipStyle: {
      margin: wp('0.55%'),
      maxWidth: wp('70%'),
      backgroundColor: theme.Palette.grey['300'],
    },
    focusedLabelText: { color: theme.Palette.IMPrimary.main },
    errorLabelText: { color: theme.Palette.IMError.main },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp('3.33%'),
      borderTopLeftRadius: wp('1.25%'),
      borderTopRightRadius: wp('1.25%'),
    },
    value: {
      ...theme.typography.paragraph.p2,
      flex: 1,
      alignSelf: 'center',
      color: theme.Palette.text.primary,
    },
    placeholder: {
      ...theme.typography.paragraph.p3,
      color: theme.Palette.text.secondary,
    },
    iconContainer: {
      width: wp('5%'),
      height: wp('5%'),
      left: wp('78.833%'),
      position: 'absolute',
    },
    arrowIconContainer: {
      width: wp('5%'),
      height: wp('5%'),
      marginLeft: wp('1%'),
      paddingTop: wp('1%'),
      left: wp('83.833%'),
      position: 'absolute',
    },
    iconStyle: {
      width: wp('2.77%'),
      height: wp('2.77%'),
    },
    helperText: {
      ...theme.typography.paragraph.p4,
      paddingLeft: wp('3.33%'),
      paddingTop: hp('0.5%'),
      color: theme.Palette.text.secondary,
    },
    errorText: {
      ...theme.typography.paragraph.p4,
      paddingLeft: wp('3.33%'),
      paddingTop: hp('0.5%'),
      color: theme.Palette.IMError.main,
    },
    loaderStyle: {
      position: 'absolute',
      alignSelf: 'center',
    },
  });
