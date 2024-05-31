import React, { useMemo } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { MaskType, MaskItem, formatWithMask, InputVariant, maskMap } from '../helper';
import IMBaseInput from '../IMBaseInput/index';

interface IStyleProps {
  rootContainer?: StyleProp<ViewStyle>;
  container?: ViewStyle;
  labelContainer?: ViewStyle;
  inputText?: StyleProp<TextStyle>;
  startAdornmentText?: TextStyle;
  labelText?: StyleProp<TextStyle>;
  helpText?: TextStyle;
  errorText?: TextStyle;
}

interface ICustomMask {
  type: 'custom';
  mask: MaskItem[];
}

interface IMaskedInputProps extends IIMTextInputProps {
  type: 'masked';
  maskType: ICustomMask | MaskType;
  maskAutoComplete?: boolean;
  obfuscationCharacter?: string;
  showObfuscated?: boolean;
  placeholderFillCharacter?: string;
}

interface INonMaskedInputProps extends IIMTextInputProps {
  type: 'non-masked';
}

interface IIMTextInputProps {
  testId: string;
  name: string;
  value: string;
  label: string;
  variant?: InputVariant;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (fieldName: string, val: string) => void;
  onBlur?: () => void;
  onFocus?: (fieldName: string) => void;
  startAdornment?: Element;
  endAdornment?: Element;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
    | undefined;
  maxLength?: number;
  multiline?: boolean;
  helperText?: string;
  errorText?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoFocus?: boolean;
  style?: IStyleProps;
}

const IMTextInput: React.FunctionComponent<IMaskedInputProps | INonMaskedInputProps> = (props) => {
  const obfuscationCharacter = props.type === 'masked' ? props.obfuscationCharacter ?? '*' : '';
  const placeholderFillCharacter = props.type === 'masked' ? props.placeholderFillCharacter ?? '_' : '';

  const [maskArray, maskHasObfuscation] = React.useMemo(() => {
    const maskArray =
      props.type == 'masked'
        ? typeof props.maskType === 'string'
          ? maskMap[props.maskType]
          : props.maskType.mask
        : [];
    const hasObfuscation = !!maskArray.find((maskItem: MaskItem) => Array.isArray(maskItem));
    return [maskArray, hasObfuscation];
  }, [[props.type, props.type === 'masked' ? JSON.stringify(props.maskType) : null]]);

  const isValueObfuscated = useMemo(
    () => props.type === 'masked' && !!maskHasObfuscation && !!props.showObfuscated,
    [maskHasObfuscation, props.type === 'masked' ? props.showObfuscated : null],
  );

  const maskedFormattedValue = useMemo(() => {
    if (props.type === 'masked') {
      return formatWithMask(props.value, maskArray, obfuscationCharacter, !!props.maskAutoComplete);
    }
    return { masked: '', unmasked: '', obfuscated: '' };
  }, [
    JSON.stringify(maskArray),
    props.value,
    obfuscationCharacter,
    props.type === 'masked' ? props.maskAutoComplete : null,
  ]);

  const handleOnChange = (fieldName: string, text: string) => {
    let textToFormat = text;
    if (props.type === 'masked') {
      if (isValueObfuscated) {
        textToFormat = maskedFormattedValue.masked;
        if (textToFormat.length > text.length) {
          textToFormat = textToFormat.slice(0, -1);
        } else if (textToFormat.length < text.length) {
          textToFormat = textToFormat + text[text.length - 1];
        }
      }
      const maskedResult = formatWithMask(
        textToFormat,
        maskArray,
        obfuscationCharacter,
        !!props.maskAutoComplete && textToFormat.length > maskedFormattedValue.masked.length,
      );
      props.onChange?.(props.name, maskedResult.unmasked);
    } else {
      props.onChange?.(props.name, textToFormat);
    }
  };

  const defaultPlaceholder = React.useMemo(
    () =>
      maskArray
        .map((maskChar: MaskItem) => (typeof maskChar === 'string' ? maskChar : placeholderFillCharacter))
        .join(''),
    [maskArray, placeholderFillCharacter],
  );

  const inputValue =
    props.type === 'masked'
      ? isValueObfuscated
        ? maskedFormattedValue.obfuscated
        : maskedFormattedValue.masked
      : props.value;

  return (
    <IMBaseInput
      testId={props.testId}
      name={props.name}
      value={inputValue}
      label={props.label}
      required={props.required}
      onChange={handleOnChange}
      placeholder={props.placeholder ?? (props.type === 'masked' ? defaultPlaceholder : undefined)}
      variant={props.variant}
      startAdornment={props.startAdornment}
      endAdornment={props.endAdornment}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
      multiline={props.multiline}
      helperText={props.helperText}
      errorText={props.errorText}
      autoCapitalize={props.autoCapitalize}
      autoFocus={props.autoFocus}
      style={props.style}
    />
  );
};

export default IMTextInput;
