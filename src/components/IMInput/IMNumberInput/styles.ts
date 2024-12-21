import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyle = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    currencyText: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.text.secondary,
    },
  });

export default useStyle;
