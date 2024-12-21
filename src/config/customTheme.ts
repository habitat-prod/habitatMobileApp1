import { TextStyle } from 'react-native';
import { DefaultTheme } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Noto } from '../constants/strings';


interface IMPaletteMainOption {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

interface IActions {
  active?: string;
  hover?: string;
  selected?: string;
  disabled?: string;
  disabledBackground?: string;
  focus?: string;
}

interface IMPaletteColorOptions extends IMPaletteMainOption {
  background?: string;
  border?: string;
  secondaryBackground?: string;
}

interface IMPaletteStateColorOptions extends IMPaletteMainOption {
  textDark?: string;
  lightBg?: string;
  border?: string;
}

interface IMPaletteOtherColor {
  stroke?: string;
  divider?: string;
  backdrop?: string;
  snackbar?: string;
  activeRating?: string;
  background?: string;
  shadow?: string;
  neutralBlue?: string;
  border?: string;
  disabled?: string;
  new?: string;
  black?: string;
  gradientBlue?: string;
}
interface IMPaletteTextColor {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
  body: string;
}
interface IMTextTypography {
  fontFamily: string;
  fontStyle: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}
interface IHeadingTypography {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
}
interface ISubHeadingTypography {
  sh1: TextStyle;
  sh2: TextStyle;
  sh3: TextStyle;
  sh4: TextStyle;
}
interface IParagraphTypography {
  p1: TextStyle;
  p2: TextStyle;
  p3: TextStyle;
  p4: TextStyle;
}
interface ILabelTypography {
  l1: TextStyle;
  l2: TextStyle;
  l3: TextStyle;
  l4: TextStyle;
}
interface IMTypography {
  heading: IHeadingTypography;
  subHeading: ISubHeadingTypography;
  paragraph: IParagraphTypography;
  label: ILabelTypography;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNativePaper {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ThemeColors {}

    interface Theme {
      Palette: {
        divider: string;
        background: string;
        IMActions: IActions;
        IMPrimary: IMPaletteColorOptions;
        IMSecondary: IMPaletteColorOptions;
        IMSuccess: IMPaletteStateColorOptions;
        IMInfo: IMPaletteStateColorOptions;
        IMWarning: IMPaletteStateColorOptions;
        IMError: IMPaletteStateColorOptions;
        IMOther: IMPaletteOtherColor;
        text: IMPaletteTextColor;
        grey: any;
      };
      typography: IMTypography;
    }
  }
}

export const customTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 4,
  Palette: {
    divider: '#E3E3E3',
    background: '#FFFFFF',
    text: {
      primary: '#1D1D1D',
      secondary: '#686868',
      disabled: '#8D8D8D',
      hint: '#9E9E9E',
      body: '#3C444D',
    },
    IMActions: {
      active: '#0000008a',
      hover: '#0000000a',
      selected: '#00000014',
      disabled: '#00000042',
      disabledBackground: '#0000001f',
      focus: '#0000001f',
    },
    IMPrimary: {
      main: '#F15927',
      dark: '#B72300',
      light: '#FF8B54',
      background: '#FEF2EE',
      border: '#E99D84',
      contrastText: '#FFFFFF',
    },
    IMSecondary: {
      main: '#26A69A',
      dark: '#00766C',
      light: '#64D8CB',
      background: '#F6F6F6',
      border: '#92D2CC80',
      contrastText: '#FFFFFF',
      secondaryBackground: '#EEF8F7',
    },
    IMSuccess: {
      main: '#4CAF50',
      dark: '#3B873E',
      light: '#7BC67E',
      textDark: '#1E4620',
      lightBg: '#EDF7ED',
      border: '#97C899',
      contrastText: '#FFFFFF',
    },
    IMInfo: {
      main: '#2196F3',
      dark: '#0B79D0',
      light: '#64B6F7',
      textDark: '#0D3C61',
      lightBg: '#E9F4FE',
      border: '#81BCEA',
      contrastText: '#FFFFFF',
    },
    IMWarning: {
      main: '#FF9800',
      dark: '#C77700',
      light: '#FFB547',
      textDark: '#663D00',
      lightBg: '#FFF5E5',
      border: '#F1BD71',
      contrastText: '#1D1D1D',
    },
    IMError: {
      main: '#F44336',
      dark: '#E31B0C',
      light: '#F88078',
      textDark: '#621B16',
      lightBg: '#FEECEB',
      border: '#EB928C',
      contrastText: '#FFFFFF',
    },
    IMOther: {
      stroke: '#C4C4C4',
      divider: '#E3E3E3',
      backdrop: '#717171',
      snackbar: '#323232',
      activeRating: '#FFB400',
      background: '#F6F6F6',
      shadow: '#505050',
      neutralBlue: '#2874F0',
      border: '#F8AC93',
      disabled: '#E1DFE2',
      new: '#706E6B',
      black: '#000000',
      gradientBlue: '#3682BE',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#616161',
      A700: '#303030',
    },
  },
  fonts: {
    regular: {
      fontFamily: Noto.regular,
    },
    medium: {
      fontFamily: Noto.medium,
    },
    light: {
      fontFamily: Noto.semiBold,
    },
    thin: {
      fontFamily: Noto.semiBoldItalic,
    },
    bold: {
      fontFamily: Noto.bold,
    },
  },
  typography: {
    heading: {
      h1: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('11.1%'),
        lineHeight: wp('14.44%'),
        letterSpacing: wp('-0.28%'),
      },
      h2: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('10%'),
        lineHeight: wp('12.22%'),
        letterSpacing: wp('-0.14%'),
      },
      h3: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('8.9%'),
        lineHeight: wp('11.11%'),
        letterSpacing: wp('-0.08%'),
      },
      h4: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('7.8%'),
        lineHeight: wp('10%'),
        letterSpacing: wp('-0.08%'),
      },
      h5: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('6.7%'),
        lineHeight: wp('8.88%'),
        letterSpacing: wp('-0.08%'),
      },
      h6: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('5.5%'),
        lineHeight: wp('7.77%'),
        letterSpacing: wp('-0.28%'),
      },
    },
    subHeading: {
      sh1: {
        fontFamily: Noto.medium,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: wp('5%'),
        lineHeight: wp('7.22%'),
        letterSpacing: wp('-0.05%'),
      },
      sh2: {
        fontFamily: Noto.medium,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: wp('4.4%'),
        lineHeight: wp('7.22%'),
        letterSpacing: wp('-0.05%'),
      },
      sh3: {
        fontFamily: Noto.medium,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: wp('3.8%'),
        lineHeight: wp('5.55%'),
        letterSpacing: wp('-0.02%'),
      },
      sh4: {
        fontFamily: Noto.medium,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: wp('3.3%'),
        lineHeight: wp('4.44%'),
        letterSpacing: wp('-0.02%'),
      },
    },
    paragraph: {
      p1: {
        fontFamily: Noto.regular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: wp('5%'),
        lineHeight: wp('7.22%'),
        letterSpacing: wp('-0.05%'),
      },
      p2: {
        fontFamily: Noto.regular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: wp('4.4%'),
        lineHeight: wp('7.22%'),
        letterSpacing: wp('-0.05%'),
      },
      p3: {
        fontFamily: Noto.regular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: wp('3.8%'),
        lineHeight: wp('5.55%'),
        letterSpacing: wp('-0.02%'),
      },
      p4: {
        fontFamily: Noto.regular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: wp('3.3%'),
        lineHeight: wp('4.44%'),
        letterSpacing: wp('-0.02%'),
      },
    },
    label: {
      l1: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('5%'),
        lineHeight: wp('7.22%'),
        letterSpacing: wp('-0.05%'),
      },
      l2: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('4.4%'),
        lineHeight: wp('7.22%'),
        letterSpacing: wp('-0.05%'),
      },
      l3: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('3.8%'),
        lineHeight: wp('5.55%'),
        letterSpacing: wp('-0.02%'),
      },
      l4: {
        fontFamily: Noto.semiBold,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: wp('3.3%'),
        lineHeight: wp('4.44%'),
        letterSpacing: wp('-0.02%'),
      },
    },
  },
  animation: {
    scale: 0.2,
  },
};
