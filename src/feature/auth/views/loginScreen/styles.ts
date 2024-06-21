import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: wp('4.44%'),
            backgroundColor: theme.Palette.background,
        },
        badgeContainer: {
            display: 'flex',
            backgroundColor: '#CCCCCC',
            height: hp('4%'),
            alignSelf: 'center',
            marginLeft: wp('2.22%'),
            paddingHorizontal: wp('1.66%'),
            gap: wp('0.55%'),
        },
        btnContainer: {
            width: 'auto',
            backgroundColor: '#3266AE',
            height: hp('7%'),
        },
        callingPhone: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: hp('7.77%'),
        },
        topTextContainer: {
            marginTop: hp('2%'),
            marginBottom: hp('3%'),
        },
        labelTextStyle: {
            fontSize: wp('10.67%'),
            textAlign: 'left',
            paddingTop: wp('2.22%'),
            color: theme.Palette.text.primary,
            fontWeight: '700',
        },
        subLabelText: {
            fontSize: wp('5.2%'),
            // textAlign: 'left',
            paddingTop: wp('2.22%'),
            color: theme.Palette.text.primary,
            fontWeight: '400',
        },
        inputRootContainer: {
            height: hp('15%'),
            justifyContent: 'space-between',
        },
        inputContainer: {
            paddingTop: wp('5.55%'),
        },
        labelContainer: {
            top: hp('12.5%'),
        },
        inputText: {
            ...theme.typography.paragraph.p3,
            paddingLeft: wp('2.77%'),
            color: theme.Palette.text.primary,
        },
        buttonContainer: {
            height: hp('9%'),
        },
        errorIcon: {
            width: wp('6.66%'),
            height: wp('6.66%'),
        },
        alertContainer: {
            alignItems: 'center',
            marginHorizontal: wp('3.33%'),
            marginVertical: wp('1.11%'),
            borderRadius: wp('2.22%'),
        },
        loaderStyle: {
            width: wp('35%'),
            height: wp('35%'),
        },
    });

export default useStyles;
