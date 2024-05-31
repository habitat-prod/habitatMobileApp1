import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { PrimaryBtnVariant } from './helper';

const useStyles = (theme: ReactNativePaper.Theme, primaryBtnVariant: PrimaryBtnVariant) =>
  StyleSheet.create({
    container: {
      width: wp('100%'),
      height: hp('8%'),
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      padding: primaryBtnVariant === 'primary' ? 0 : wp('3.33%'),
      backgroundColor: theme.Palette.IMPrimary.contrastText,
      shadowOffset: { width: 0, height: -10 },
      shadowOpacity: 0.03,
      shadowRadius: 15,
      elevation: 15,
    },
    defaultPrimaryBtnContainer: {
      ...(primaryBtnVariant === 'primary' && { width: wp('100%'), height: hp('8%'), borderRadius: 0 }),
      ...(primaryBtnVariant === 'secondary' && { width: wp('93.33%'), borderRadius: wp('2.22%') }),
      ...(primaryBtnVariant === 'tertiary' && { width: wp('55%'), marginLeft: wp('2.22%') }),
    },
    defaultPrimaryBtnLabel: {
      ...theme.typography.label.l2,
    },
    defaultSecondaryBtnContainer: {
      flex: 1,
    },
    defaultSecondaryBtnLabel: {
      ...theme.typography.label.l2,
    },
    defaultSecondaryTitleContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    defaultSecondaryTitle: {
      ...theme.typography.label.l3,
      color: theme.Palette.text.primary,
    },
    defaultSubTitleContainer: {
      height: hp('2%'),
      width: wp('35%'),
      justifyContent: 'flex-start',
    },
    defaultSecondarySubTitle: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.disabled,
      paddingHorizontal: 0,
    },
  });

export default useStyles;
