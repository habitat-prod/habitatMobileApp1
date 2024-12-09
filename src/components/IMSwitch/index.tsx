import React from 'react';
import { StyleProp, Switch, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useStyle } from './styles';

export interface IStyleProps {
  container?: StyleProp<ViewStyle>;
  switchContainer?: StyleProp<ViewStyle>;
  switch?: StyleProp<ViewStyle>;
  labelText?: StyleProp<TextStyle>;
}

export interface IMSwitchProps {
  testId: string;
  name: string;
  active?: boolean;
  onToggleBtnClick?: (name: string, value: boolean) => void;
  disabled?: boolean;
  label?: string;
  helperText?: string;
  errorText?: string;
  styles?: IStyleProps;
}

const IMSwitch: React.FunctionComponent<IMSwitchProps> = (props) => {
  const theme = useTheme();
  const styles = useStyle(theme, props.active ?? false, props.disabled ?? false);

  const onToggleBtnClick = (value: boolean) => {
    props?.onToggleBtnClick?.(props.name, value);
  };

  return (
    <View testID={props.testId} accessibilityLabel={props.testId} style={[styles.container, props.styles?.container]}>
      <View style={[styles.switchContainer, props.styles?.switchContainer]}>
        <Switch
          testID={`${props.testId}_switch`}
          accessibilityLabel={`${props.testId}_switch`}
          value={props.active}
          onValueChange={onToggleBtnClick}
          disabled={props.disabled}
          trackColor={{
            false: styles.falseTrack.color,
            true: styles.trueTrack.color,
          }}
          thumbColor={styles.thumbColor.color}
          style={[styles.switch, props.styles?.switch]}
        />
        {!!props.label && (
          <Text
            testID={`${props.testId}_switch_label`}
            accessibilityLabel={`${props.testId}_switch_label`}
            style={[styles.label, props.styles?.labelText]}
          >
            {props.label}
          </Text>
        )}
      </View>
      {!!props.helperText && (
        <Text
          testID={`${props.testId}_switch_helper_text`}
          accessibilityLabel={`${props.testId}_switch_helper_text`}
          style={[styles.helperText]}
        >
          {props.helperText}
        </Text>
      )}
      {!!props.errorText && (
        <Text
          testID={`${props.testId}_switch_error_text`}
          accessibilityLabel={`${props.testId}_switch_error_text`}
          style={[styles.errorText]}
        >
          {props.errorText}
        </Text>
      )}
    </View>
  );
};

export default IMSwitch;
