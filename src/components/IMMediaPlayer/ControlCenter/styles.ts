import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: hp('6%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp('10%'),
    backgroundColor: theme.Palette.background,
  },
  iconButton: { height: wp('13%'), width: wp('13%') },
});


export default useStyles;