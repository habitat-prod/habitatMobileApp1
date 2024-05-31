import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    height: hp('2.5%'),
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
    margin: wp('2%'),
    paddingHorizontal: wp('2%'),
    backgroundColor: theme.Palette.background,
  },
  sliderContainer: {
    width: wp('63%'),
  },
  time: {
    color: theme.Palette.grey['600'],
  },
});


export default useStyles;