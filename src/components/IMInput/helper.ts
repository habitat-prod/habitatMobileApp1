export type InputVariant = 'standard' | 'outlined';
export type NumberInputType = 'number' | 'decimal' | 'currency';
export type MaskType = 'credit-card' | 'mobile-number' | 'aadhar-number' | 'gst' | 'pincode';
export type MaskItem = string | RegExp | [RegExp];

export const formatWithMask = (
  text: string, // this can be masked as well as unmasked value ,the function handles both cases accurately
  mask: MaskItem[],
  obfuscationCharacter: string,
  maskAutoComplete: boolean,
) => {
  if (!text) return { masked: '', unmasked: '', obfuscated: '' };
  if (!mask)
    return {
      masked: text,
      unmasked: text,
      obfuscated: text,
    };
  const maskArray = mask;
  let masked = '';
  let obfuscated = '';
  let unmasked = '';
  let maskCharIndex = 0;
  let valueCharIndex = 0;
  while (true) {
    // mask is ended
    if (maskCharIndex === maskArray.length) {
      break;
    }
    const maskChar = maskArray[maskCharIndex];
    const valueChar = text[valueCharIndex];
    // value is ended
    if (valueCharIndex === text.length) {
      if (typeof maskChar === 'string' && maskAutoComplete) {
        masked += maskChar;
        obfuscated += maskChar;
        maskCharIndex += 1;
        continue;
      }
      break;
    }
    // value equals mask: add to masked result and advance on both mask and value indexes
    if (maskChar === valueChar) {
      masked += maskChar;
      obfuscated += maskChar;
      valueCharIndex += 1;
      maskCharIndex += 1;
      continue;
    }
    const unmaskedValueChar = text[valueCharIndex];
    // it's a regex maskChar: advance on value index and validate whether the  value lies within the regex
    if (typeof maskChar === 'object') {
      // advance on value index
      valueCharIndex += 1;
      const shouldObsfucateChar = Array.isArray(maskChar);
      const maskCharRegex = Array.isArray(maskChar) ? maskChar[0] : maskChar;
      const matchRegex = RegExp(maskCharRegex).test(valueChar);
      // value match regex: add to masked and unmasked result and advance on mask index too
      if (matchRegex) {
        masked += valueChar;
        obfuscated += shouldObsfucateChar ? obfuscationCharacter : valueChar;
        unmasked += unmaskedValueChar;
        maskCharIndex += 1;
      }
      continue;
    } else {
      // it's a fixed maskChar: add to maskedResult and advance on mask index
      masked += maskChar;
      obfuscated += maskChar;
      maskCharIndex += 1;
      continue;
    }
  }
  return { masked, unmasked, obfuscated };
};

const CREDIT_CARD = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  [/\d/],
  [/\d/],
  [/\d/],
  [/\d/],
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
] as MaskItem[];

const GST = [
  /\d/,
  /\d/,
  ' ',
  /[a-zA-Z]/,
  /[a-zA-Z]/,
  /[a-zA-Z]/,
  /[a-zA-Z]/,
  /[a-zA-Z]/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /[a-zA-Z]/,
  ' ',
  /[a-zA-Z\d]/,
  ' ',
  /[zZ]/,
  ' ',
  /[a-zA-Z\d]/,
] as MaskItem[];

const PINCODE = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

const MOBILE_NUMBER = [/\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/] as MaskItem[];

const AADHAR_NUMBER = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

export const maskMap: Record<MaskType, MaskItem[]> = {
  'credit-card': CREDIT_CARD,
  gst: GST,
  'mobile-number': MOBILE_NUMBER,
  'aadhar-number': AADHAR_NUMBER,
  pincode: PINCODE,
};
