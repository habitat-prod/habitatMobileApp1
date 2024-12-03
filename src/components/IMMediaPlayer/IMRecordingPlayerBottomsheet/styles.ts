import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    customerInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: wp('4.44%'),
      padding: wp('4.44%'),
      backgroundColor: theme.Palette.grey[100],
    },
    customerName: {
      ...theme.typography.label.l3,
      color: theme.Palette.text.primary,
    },
    customerNumber: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.grey[700],
    },
    additionalInfo: {
      ...theme.typography.paragraph.p4,
      color: theme.Palette.text.hint,
    }
  });

export default useStyles;
