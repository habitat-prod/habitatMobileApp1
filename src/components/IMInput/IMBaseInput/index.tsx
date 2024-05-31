import React, { useState } from 'react';
import { TextStyle, TextInput, View, ViewStyle, Text, StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

import { InputVariant } from '../helper';
import useStyle from './styles';

interface IStyleProps {
  rootContainer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  labelContainer?: StyleProp<ViewStyle>;
  inputText?: StyleProp<TextStyle>;
  labelText?: StyleProp<TextStyle>;
  helpText?: TextStyle;
  errorText?: TextStyle;
}

interface IIMBaseInputProps {
  testId: string;
  name: string;
  value: string;
  label: string;
  hideLabel?: boolean;
  required?: boolean;
  inputBoxRef?: React.RefObject<TextInput>;
  onChange?: (fieldName: string, val?: any) => void;
  onBlur?: () => void;
  onFocus?: (fieldName: string) => void;
  placeholder?: string;
  variant?: InputVariant;
  startAdornment?: Element;
  endAdornment?: Element;
  helperText?: string;
  errorText?: string;
  numberOfLines?: number;
  multiline?: boolean;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
    | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  disabled?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  style?: IStyleProps;
}

const IMBaseInput: React.FunctionComponent<IIMBaseInputProps> = (props) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const styles = useStyle(theme, isFocused, !!props.disabled, props.variant ?? 'outlined');

  const renderLabel = () => `${props.label}${props.required ? '*' : ''}`;

  const handleOnFocus = () => {
    setIsFocused(true);
    props.onFocus?.(props.name);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
    props.onBlur?.();
  };

  return (
    <View
      testID={`${props.testId}-container`}
      accessibilityLabel={`${props.testId}-container`}
      style={[styles.rootContainer, props.style?.rootContainer]}
    >
      <View style={[styles.contentContainer, props.style?.container]}>
        {!props.hideLabel && (isFocused || !!props.placeholder || !!props.value) && (
          <View style={[styles.labelContainer, props.style?.labelContainer]}>
            <Text
              testID={`${props.testId}-label`}
              accessibilityLabel={`${props.testId}-label`}
              style={[styles.labelText, props.style?.labelText]}
            >
              {renderLabel()}
            </Text>
          </View>
        )}
        {props.startAdornment}
        <TextInput
          testID={props.testId}
          accessibilityLabel={props.testId}
          ref={props.inputBoxRef}
          value={props.value}
          onChangeText={(value) => props.onChange?.(props.name, value)}
          placeholder={props.placeholder ?? renderLabel()}
          placeholderTextColor={theme.Palette.text.secondary}
          onFocus={handleOnFocus}
          editable={!props.disabled}
          onBlur={handleOnBlur}
          keyboardType={props.keyboardType}
          autoCapitalize={props.autoCapitalize}
          style={[styles.inputText, props.style?.inputText]}
          numberOfLines={props.numberOfLines}
          multiline={props.multiline}
          maxLength={props.maxLength}
          autoFocus={props.autoFocus}
        />
        {props.endAdornment}
      </View>
      {!!props.helperText && (
        <Text
          testID={`${props.testId}-helperText`}
          accessibilityLabel={`${props.testId}-helperText`}
          style={[styles.helpTitleStyle, props.style?.helpText]}
        >
          {props.helperText}
        </Text>
      )}
      {!!props.errorText && (
        <Text
          testID={`${props.testId}-errorText`}
          accessibilityLabel={`${props.testId}-errorText`}
          style={[styles.errorTitleStyle, props.style?.errorText]}
        >
          {props.errorText}
        </Text>
      )}
    </View>
  );
};

export default IMBaseInput;
