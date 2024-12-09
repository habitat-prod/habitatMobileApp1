import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  Platform,
  StyleProp,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import useStyles from './styles';

interface IMOtpInputStyleProps {
  container?: StyleProp<ViewStyle>;
  otpContainer?: StyleProp<ViewStyle>;
  textInput?: StyleProp<ViewStyle>;
}

interface IMOtpInputProps {
  onValidOtp: (val: string) => void;
  onChange?: (val: string) => void;
  noOfBoxes?: number;
  otpBoxStyle?: StyleProp<ViewStyle>;
  clearOtp?: boolean;
  testEventId?: string;
  timerHandler?: () => void;
  errorText?: string;
  styles?: IMOtpInputStyleProps;
}

const IMOtpInput: FunctionComponent<IMOtpInputProps> = (props: IMOtpInputProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const noOfBoxes = props.noOfBoxes ?? 4;
  const inputRef = useRef<TextInput>(null);
  const [otpString, setOtpString] = useState<string>('');

  useEffect(() => {
    return () => Keyboard.dismiss();
  }, []);

  useEffect(() => {
    props.onChange && props.onChange(otpString);
    if (otpString.length === noOfBoxes) {
      props.onValidOtp(otpString);
    }
  }, [otpString]);

  useEffect(() => {
    if (props.clearOtp) {
      setOtpString('');
    }
  }, [props.clearOtp]);

  const handleChangeText = (val: string) => {
    setOtpString(val);
    props.timerHandler && props.timerHandler();
  };

  return (
    <View style={[styles.container, props.styles?.container]}>
      <View style={[styles.otpContainer, props.styles?.otpContainer]}>
        {Array(noOfBoxes)
          .fill(null)
          .map((item, i) => (
            <TouchableWithoutFeedback
              onPress={() => {
                inputRef?.current?.isFocused() ? inputRef?.current?.blur() : inputRef?.current?.focus();
              }}
              key={i}
              style={[styles.otpBoxes, props.otpBoxStyle]}
            >
              <Text
                testID={`${props.testEventId}-${i}` ?? 'IM-Otp-Input'}
                style={[styles.inputStyle, props.styles?.textInput]}
              >
                {otpString[i]}
              </Text>
            </TouchableWithoutFeedback>
          ))}
        <TextInput
          textContentType={Platform.OS === 'android' ? 'none' : 'oneTimeCode'}
          keyboardAppearance="default"
          ref={inputRef}
          autoFocus
          maxLength={noOfBoxes}
          keyboardType={'numeric'}
          onChangeText={handleChangeText}
          value={otpString}
          testID={props.testEventId ?? 'IM-Otp-Input'}
          style={styles.hiddenInputStyle}
        />
      </View>
      <Text style={styles.errorText}>{props.errorText ?? ''}</Text>
    </View>
  );
};

export default IMOtpInput;
