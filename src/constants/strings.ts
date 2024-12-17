export const Noto = {
    bold: 'NotoSans-Bold',
    italic: 'NotoSans-Italic',
    medium: 'NotoSans-Medium',
    regular: 'NotoSans-Regular',
    semiBold: 'NotoSans-SemiBold',
    semiBoldItalic: 'NotoSans-SemiBoldItalic',
  };

  export enum CurrencyCodes {
    IN = '\u20B9',
    US = '\u0024',
  }
  
  export type CountryCodes = 'IN' | 'US';


/**
 * For Listing Screens , WE are defining a common page size
 * if everytime we hit the scroll end (service hit)
 */
export const defaultPageSize = 10;

export const defaultPageNumber = 0;
export const defaultCursorValue = '0';
export const maxPageSize = 1000;
export const pinCodeDigits = 6;

export const defaultOTPTimeout = 30000;