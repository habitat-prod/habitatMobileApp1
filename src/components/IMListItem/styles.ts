import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme, isSelected: boolean, rightItemCount: number, isDisabled: boolean) =>
  StyleSheet.create({
    container: {
      minHeight: hp('8%'),
      flexDirection: 'row',
      paddingHorizontal: wp('4.44%'),
      paddingVertical: hp('1%'),
      ...(isSelected && { backgroundColor: theme.Palette.IMPrimary.background }),
    },
    leftAvatarContainer: {
      alignSelf: 'center',
      marginVertical: hp('1.5%'),
    },
    leftCheckBoxContainer: {
      width: wp('10%'),
      justifyContent: 'center',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: wp('3.33%'),
    },
    primaryText: {
      ...theme.typography.paragraph.p3,
      color: theme.Palette.text.primary,
      ...(isDisabled && { color: theme.Palette.text.disabled }),
    },
    secondaryText: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.secondary,
    },
    rightItemContainer: {
      flex: rightItemCount * 0.2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });

export default useStyles;
