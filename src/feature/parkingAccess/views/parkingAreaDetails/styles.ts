import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: wp('4.44%'),
    },
    textStyle: {
      fontSize: 15,
      fontWeight: '700',
      color: 'black',
    },
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: wp('3.33%'),
    },
    iconTitleContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    btnContainer: {
      width: wp('40%'),
    },
    btnTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: 'white',
    },
    itemContainer: {
      width: wp('45%'),
      borderWidth: wp('0.278%'),
      borderColor: '#D1D1D1',
      height: hp('9%'),
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedSlot: {
      borderColor: '#000000',
      backgroundColor: '#000000'
    },
    availableSlot: {
      borderColor: '#06C368',
      backgroundColor: '#06C368'
    },
    reservedSlot: {
      backgroundColor: '#4682B4',
      borderColor: '#4682B4',
    },
    rightContainer: {
      borderRightWidth: 0,
    },
    leftContainer: {
      borderLeftWidth: 0,
    },
    btnText: {
      color: 'white'
    },
    flatListContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      borderTopWidth: wp('0.138%'),
      borderBottomWidth: wp('0.138%'),
    },
    rightIcon: {
      paddingBottom: wp('5.4%'),
    },
  });

export default useStyles;
