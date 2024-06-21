import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: any) =>
  StyleSheet.create({
    container: {
    //   display: 'flex',
      flex: 1,
      paddingHorizontal: wp('4.44%'),
      flexDirection: 'column',
      backgroundColor: theme.Palette.background,
      gap: wp('3.33%'),
    //   justifyContent: 'center',
    },
    btnContainer: {
        width: 'auto', 
        height: hp('7%'), 
        marginHorizontal: wp('4.44%'), 
        backgroundColor: '#3266AE',
        marginTop: wp('5.55%'), 
    },
    phoneLogoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: hp('15%'),
    },
    labelTextStyle: {
        fontSize: wp('10.67%'),
        textAlign: 'left',
        paddingTop: wp('1.11%'),
        color: theme.Palette.text.primary,
        fontWeight: '700',
      },
      subLabelText: {
          fontSize: wp('5%'),
          // textAlign: 'left',
          padding: wp('2.22%'),
          color: '#1C1B1F',
          fontWeight: '400',
      },
    subHeadingTextStyle: {
      ...theme.typography.subHeading.sh3,
      fontSize: wp('3.7%'),
      fontWeight: '700',
      marginTop: hp('1%'),
      color: theme.Palette.text.secondary,
    },
    buttonStyle: {
      height: hp('4.5%'),
      width: wp('50%'),
    },
    buttonTextStyles: {
      ...theme.typography.label.l3,
    },
    resendContainer: {
      flexDirection: 'column',
      height: hp('5%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    resendTextMain: {
      color: theme.Palette.text.disabled,
      paddingBottom: hp('0.5%'),
    },
    timerContainer: {
      flexDirection: 'row',
    },
    resendText: {
      ...theme.typography.paragraph.p3,
      color: theme.Palette.text.disabled,
      fontWeight: '500',
    },
    resendAgainText: {
      ...theme.typography.label.l3,
      color: theme.Palette.text.disabled,
      fontWeight: '600',
    },
    submitButtonContainer: {
      height: hp('9%'),
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      padding: wp('4.44%'),
    },
    submitButtonStyles: {
      height: hp('9%'),
    },
    loaderStyle: {
      width: wp('35%'),
      height: wp('35%'),
    },
  });

export default useStyles;
