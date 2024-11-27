import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { LoaderSize } from './helper';

const useStyles = (theme: ReactNativePaper.Theme, size: LoaderSize) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    lottieView: {
      ...(size === 'small' && { width: wp('7.77%'), height: wp('7.77%') }),
      ...(size === 'medium' && { width: wp('11.11%'), height: wp('11.11%') }),
      ...(size === 'large' && { width: wp('13.88%'), height: wp('13.88%') }),
    },
    textStyles: {
      ...theme.typography.subHeading.sh3,
      color: theme.Palette.text.primary,
    },
    loaderContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
  });

export default useStyles;
