import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    rootContainer: {
      margin: wp('2.77%'),
    },
    pickerContainer: {
      width: wp('93%'),
      minHeight: hp('7.5%'),
      justifyContent: 'space-between',
      marginTop: hp('1%'),
      marginHorizontal: wp('2%'),
      borderColor: theme.Palette.IMOther.stroke,
      borderWidth: 1,
      borderTopLeftRadius: wp('1.25%'),
      borderTopRightRadius: wp('1.25%'),
      backgroundColor: theme.Palette.grey['100'],
    },
    bottomSheetContainer: {
      top: hp('15%'),
    },
    bottomSheetContentStyle: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: hp('-2%'),
      paddingHorizontal: wp('0%'),
      paddingVertical: wp('0%'),
    },
    loaderStyle: {
      top: hp('4.5%'),
      position: 'absolute',
      alignSelf: 'center',
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
    disabledPickerContainer: {
      opacity: 0.4,
    },
    errorPickerContainer: {
      borderColor: theme.Palette.IMPrimary.main,
    },
    focusedPickerContainer: {
      borderWidth: wp('0.55%'),
      borderColor: theme.Palette.IMPrimary.main,
    },
    labelContainer: {
      height: hp('2%'),
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      left: wp('2%'),
      top: -hp('1%'),
      backgroundColor: theme.Palette.grey[100],
      zIndex: 9,
    },
    helperText: {
      ...theme.typography.paragraph.p4,
      paddingLeft: wp('3.33%'),
      paddingTop: hp('0.5%'),
      color: theme.Palette.text.secondary,
    },
    errorMessage: {
      ...theme.typography.paragraph.p4,
      paddingLeft: wp('3.33%'),
      paddingTop: hp('0.5%'),
      color: theme.Palette.IMError.main,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp('3.33%'),
      borderTopLeftRadius: wp('1.25%'),
      borderTopRightRadius: wp('1.25%'),
    },
    focusedLabelText: {
      color: theme.Palette.IMPrimary.main,
    },
    errorLabelText: {
      color: theme.Palette.IMError.main,
    },
    labelText: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.secondary,
    },
    bottomSheetBody: {
      width: wp('100%'),
      paddingVertical: wp('5.44%'),
    },
    checkListContainer: {
      padding: 0,
      height: hp('58%'),
      alignItems: 'center',
    },
    checkBoxContentContainer: {
      flexDirection: 'row',
      width: wp('91%'),
      height: hp('8%'),
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: wp('4.44%'),
      marginHorizontal: wp('4.44%'),
      backgroundColor: theme.Palette.grey[50],
    },
    checkBoxContainer: {
      marginRight: wp('2.22%'),
    },
    checkBoxLabelStyle: {
      ...theme.typography.paragraph.p3,
      maxWidth: wp('97.2%'),
      color: theme.Palette.text.primary,
    },
    placeholder: {
      ...theme.typography.paragraph.p2,
      marginTop: hp('1.8%'),
      flex: 1,
      alignSelf: 'center',
      color: theme.Palette.text.secondary,
    },
    sourceHeaderText: {
      fontSize: wp('4.44%'),
      marginHorizontal: wp('2%'),
      paddingVertical: hp('1.5%'),
      color: theme.Palette.IMOther.stroke,
    },
    emptyView: {
      height: hp('58%'),
      justifyContent: 'center',
    },
    footerContainer: {
      padding: wp('4.44%'),
    },
    footerPrimaryBtnContainer: {
      width: wp('43.33%'),
      height: hp('5%'),
      borderRadius: wp('2.22%'),
    },
  });
