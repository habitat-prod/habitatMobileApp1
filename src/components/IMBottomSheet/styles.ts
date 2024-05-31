import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme, isTitle: boolean) =>
  StyleSheet.create({
    modelBackDrop: {
      ...StyleSheet.absoluteFillObject,
    },
    defaultBackdropContainer: {
      flex: 1,
      opacity: 0.6,
      backgroundColor: theme.Palette.IMOther.black,
    },
    defaultContainer: {
      width: wp('100%'),
      minHeight: hp('25%'),
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      overflow: 'hidden',
      borderTopLeftRadius: wp('4.16%'),
      borderTopRightRadius: wp('4.16%'),
      backgroundColor: theme.Palette.IMPrimary.contrastText,
    },
    defaultTitleContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: hp('7.5%'),
      width: wp('100%'),
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: wp('0.27%'),
      padding: wp('4.44%'),
      borderBottomColor: theme.Palette.IMOther.divider,
      ...(!isTitle && { justifyContent: 'flex-end' }),
    },
    defaultTitleStyle: {
      ...theme.typography.subHeading.sh2,
      color: theme.Palette.text.primary,
    },
    defaultIconStyle: {
      width: wp('5.55%'),
      height: wp('5.55%'),
    },
    defaultContentArea: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: wp('4.44%'),
    },
    defaultFooterContainer: {
      height: hp('6.5%'),
    },
  });

export default useStyles;
