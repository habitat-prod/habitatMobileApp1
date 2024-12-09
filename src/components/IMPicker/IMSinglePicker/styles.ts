import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    bottomSheetContainer: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    bottomSheetContentArea: {
      width: wp('100%'),
      paddingTop: wp('5%'),
      justifyContent: 'flex-start',
    },
    bottomSheetDefaultContainer: {
      top: hp('15%'),
    },
    searchBarWrapper: {
      marginTop: 0,
      marginBottom: wp('5.55%'),
    },
    addButtonContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      marginBottom: wp('2.22%'),
      padding: wp('2.22%'),
    },
    addButtonIcon: {
      width: wp('3.33%'),
      height: wp('3.33%'),
      marginRight: wp('1.66%'),
    },
    addButtonTitle: {
      ...theme.typography.label.l3,
      flex: 1,
    },
    radioButtonListContainer: {
      flex: 0,
      height: hp('59%'),
      alignItems: 'center',
    },
    radioButtonContainer: {
      flexDirection: 'row',
      width: wp('100%'),
      alignItems: 'center',
      marginBottom: wp('2.22%'),
      paddingHorizontal: wp('3.33%'),
      paddingVertical: wp('2.77%'),
      backgroundColor: theme.Palette.grey[50],
    },
    radioButtonInnerContainer: {
      marginHorizontal: wp('2.22%'),
    },
    radioButtonLabelText: {
      ...theme.typography.subHeading.sh2,
      width: wp('85%'),
      marginLeft: 0,
    },
    radioButtonContentContainer: {
      paddingTop: 0,
    },
    listItemContainer: {
      paddingHorizontal: wp('2.22%'),
    },
    listItemTitle: {
      ...theme.typography.paragraph.p3,
    },
    listItemSubtitle: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.disabled,
    },
    emptyView: {
      height: hp('59%'),
      width: wp('80%'),
      justifyContent: 'center',
    },
  });
