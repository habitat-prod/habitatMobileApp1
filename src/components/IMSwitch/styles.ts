import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyle = (theme: ReactNativePaper.Theme, toggleValue: boolean, disabled: boolean) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    falseTrack: {
      color: disabled ? theme.Palette.grey[300] : theme.Palette.grey[500],
    },
    trueTrack: {
      color: disabled ? theme.Palette.grey[300] : theme.Palette.IMPrimary.border,
    },
    thumbColor: {
      ...(disabled
        ? { color: theme.Palette.grey[200] }
        : { color: !toggleValue ? theme.Palette.grey[50] : theme.Palette.IMPrimary.main }),
    },
    switch: {
      transform: [{ scaleX: wp('.3%') }, { scaleY: wp('.3%') }],
    },
    label: {
      ...theme.typography.paragraph.p2,
      color: disabled ? theme.Palette.text.disabled : theme.Palette.text.primary,
      marginLeft: wp('3%'),
    },
    helperText: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.text.primary,
    },
    errorText: {
      ...theme.typography.paragraph.p2,
      color: theme.Palette.IMError.main,
    },
  });
