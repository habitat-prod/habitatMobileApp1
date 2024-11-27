import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: any) =>
  StyleSheet.create({
    extendedErrorBoxContainer: {
      height: hp('48%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorBoxContainer: {
      height: hp('10%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      height: wp('41.66%'),
      width: wp('41.66%'),
    },
    errorStyle: {
      width: wp('100%'),
      alignItems: 'center',
    },
    errorMessageStyle: {
      ...theme.typography.subHeading.sh1,
      marginTop: hp('2%'),
      color: theme.Palette.text.primary,
    },
    errorDescriptionStyle: {
      ...theme.typography.paragraph.p4,
      marginTop: hp('1%'),
      color: theme.Palette.text.secondary,
    },
    cardErrorMessageStyle: {
      ...theme.typography.paragraph.p4,
      textAlign: 'center',
      color: theme.Palette.text.secondary,
    },
    buttonStyle: {
      width: wp('18.8%'),
      height: hp('4.5%'),
      marginTop: hp('2.5%'),
      backgroundColor: theme.Palette.IMPrimary.main,
    },
    titleStyle: {
      ...theme.typography.label.l3,
      color: theme.Palette.IMPrimary.contrastText,
    },
  });

export default useStyles;
