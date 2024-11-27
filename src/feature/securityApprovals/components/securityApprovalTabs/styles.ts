import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyle = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    tabStyle: {
      ...theme.typography.label.l1,
    },
    tabHeadingStyle: {
      ...theme.typography.label.l4,
      textTransform: 'none',
    },
    indicatorStyle: {
      backgroundColor: '#4682B4',
    },
  });

export default useStyle;
