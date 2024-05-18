import React, { useEffect, useState } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import { InputVariant, NumberInputType } from '../helper';
import IMBaseInput from '../HBBaseInput';
import InputAdornment from '../InputAdornment/index';
import useStyle from './styles';
import { indianCurrencyCommaSeparator } from '../../../constant/common';
import { CurrencyCodes } from '../../../constant/string';

interface IStyleProps {
  rootContainer?: ViewStyle;
  container?: ViewStyle;
  labelContainer?: ViewStyle;
  inputText?: TextStyle;
  startAdornmentText?: TextStyle;
  labelText?: TextStyle;
  helpText?: TextStyle;
  errorText?: TextStyle;
}

interface IIMNumberInputProps {
  testId: string;
  name: string;
  type: NumberInputType;
  value: number | undefined;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  countryCode?: 'IN';
  noOfDecimals?: number;
  onChange?: (fieldName: string, val?: any) => void;
  onBlur?: () => void;
  onFocus?: (fieldName: string) => void;
  variant?: InputVariant;
  startAdornment?: Element;
  endAdornment?: Element;
  helperText?: string;
  errorText?: string;
  autoFocus?: boolean;
  maxLength?: number;
  style?: IStyleProps;
}

const IMNumberInput: React.FunctionComponent<IIMNumberInputProps> = (props) => {
  const theme = useTheme();
  const styles = useStyle(theme);
  const [inputValue, setInputValue] = useState<string>(props.value?.toString() ?? '');

  const formatInputValue = (value: number | undefined) => {
    if (value === undefined) return '';
    if (props.noOfDecimals !== undefined) {
      return value.toString().replace(new RegExp('[^0-9.]+|(?:(\\.\\d{0,' + props.noOfDecimals + '})\\d*)', 'g'), '$1');
    }
    if (props.countryCode === 'IN') {
      return indianCurrencyCommaSeparator(value.toString());
    }
    return value.toString();
  };

  useEffect(() => {
    setInputValue(formatInputValue(props.value));
  }, [props.value, props.noOfDecimals, props.countryCode]);

  const handleOnChange = (fieldName: string, value: string) => {
    const displayValue = value.replace(/[^0-9.]+/g, '').replace(/(\..*)\./g, '$1');
    //Above regex allow only digits and one dot
    props.onChange?.(fieldName, !!value ? Number(displayValue) : undefined);
    let formattedValue = displayValue;

    if (props.type === 'number') {
      formattedValue = value.replace(/[^0-9]+/g, '');
    }
    if (props.type === 'decimal' || props.type === 'currency') {
      if (props.noOfDecimals !== undefined) {
        formattedValue = formattedValue.replace(
          new RegExp('[^0-9.]+|(?:(\\.\\d{0,' + props.noOfDecimals + '})\\d*)', 'g'),
          '$1',
        );
        //Above Regex allows only fixed noOfDecimal digits
      }
    }
    props.onChange?.(fieldName, Number(formattedValue));
    if (props.countryCode === 'IN') {
      formattedValue = indianCurrencyCommaSeparator(formattedValue);
    }

    setInputValue(formattedValue);
  };

  const currencyAdornment = () => {
    if (props.type === 'currency') {
      if (props.countryCode === 'IN') {
        return (
          <InputAdornment
          />
        );
      }
    }
  };

  return (
    <IMBaseInput
      testId={props.testId}
      name={props.name}
      value={inputValue}
      label={props.label}
      required={props.required}
      onChange={handleOnChange}
      placeholder={props.placeholder}
      variant={props.variant}
      startAdornment={props.startAdornment ?? currencyAdornment()}
      endAdornment={props.endAdornment}
      keyboardType={'numeric'}
      disabled={props.disabled}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      helperText={props.helperText}
      errorText={props.errorText}
      autoFocus={props.autoFocus}
      maxLength={props.maxLength}
      style={props.style}
    />
  );
};

export default IMNumberInput;
