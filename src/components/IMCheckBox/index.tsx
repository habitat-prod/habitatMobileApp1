import React, { FunctionComponent } from 'react';
import { View, Text, ViewStyle, TextStyle, TouchableOpacity, StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

import useStyles from './styles';

export interface IStyleProps {
  container?: ViewStyle;
  contentContainer?: StyleProp<ViewStyle>;
  checkBoxContainer?: ViewStyle;
  title?: TextStyle;
  textContainer?: StyleProp<ViewStyle>;
  label?: TextStyle;
  subLabel?: TextStyle;
  helperText?: TextStyle;
  errorText?: TextStyle;
}

export interface IMCheckBoxProps {
  id: string;
  name: string;
  title?: string;
  isSelected?: boolean;
  label?: string;
  subLabel?: string;
  onChange?: (name: string, selected: boolean, index: number) => void;
  isDisabled?: boolean;
  index?: number;
  errorText?: string;
  helperText?: string;
  styles?: IStyleProps;
}

const IMCheckBox: FunctionComponent<IMCheckBoxProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const onChange = () => {
    props.onChange?.(props.name, !props.isSelected, props.index ?? 0);
  };

  return (
    <View testID={props.id} accessibilityLabel={props.id} style={[styles.defaultContainer, props.styles?.container]}>
      {!!props.title && (
        <Text style={[styles.title, props.styles?.title, props.isDisabled && styles.disabledLabelText]}>
          {props.title}
        </Text>
      )}
      <TouchableOpacity onPress={onChange} style={[styles.contentContainer, props.styles?.contentContainer]} disabled={props.isDisabled}>
        <CheckBox
          value={props.isSelected}
          onValueChange={onChange}
          style={props.styles?.checkBoxContainer}
          disabled={props.isDisabled}
          tintColors={{
            true: theme.Palette.IMPrimary.main,
            false: props.isDisabled ? theme.Palette.grey['400'] : theme.Palette.text.secondary,
          }}
        />
        <View style={[styles.textContainer, props.styles?.textContainer]}>
          {!!props.label && (
            <Text style={[styles.label, props.styles?.label, props.isDisabled && styles.disabledLabelText]}>
              {props.label}
            </Text>
          )}
          {!!props.subLabel && (
            <Text style={[styles.subLabel, props.styles?.subLabel, props.isDisabled && styles.disabledLabelText]}>
              {props.subLabel}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      {!!props.helperText && <Text style={[styles.errorText, props.styles?.errorText]}>{props.helperText} </Text>}
      {!!props.errorText && <Text style={[styles.errorText, props.styles?.errorText]}>{props.errorText} </Text>}
    </View>
  );
};
export default IMCheckBox;
