import React, { FC } from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import useStyles from './styles';

interface IStyleProps {
  container?: StyleProp<ViewStyle>;
  innerContainer?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  radioButton?: StyleProp<ViewStyle>;
  selectedRadioButton?: StyleProp<ViewStyle>;
  labelText?: StyleProp<TextStyle>;
  contentContainer?: StyleProp<ViewStyle>;
  helperText?: StyleProp<TextStyle>;
  errorText?: StyleProp<TextStyle>;
}

export interface IMRadioButtonProps {
  id: string;
  name: string;
  key?: string;
  isSelected?: boolean;
  title?: string;
  label?: string;
  index?: number;
  onChange?: (name: string, selected: boolean, index?: number) => void;
  children?: JSX.Element;
  errorText?: string;
  helperText?: string;
  isDisabled?: boolean;
  style?: IStyleProps;
}

const IMRadioButton: FC<IMRadioButtonProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.isSelected ?? false);

  const onChange = () => {
    props.onChange?.(props.name, !props.isSelected, props.index);
  };

  return (
    <TouchableOpacity
      testID={props.id}
      accessibilityLabel={props.id}
      onPress={onChange}
      disabled={props.isDisabled}
      style={[styles.container, props.style?.container]}
    >
      {!!props.title && <Text style={[styles.radioButtonTitle, props.style?.titleStyle]}>{props.title} </Text>}
      <View style={[styles.radioButtonInnerContainer, props.style?.innerContainer]}>
        <View style={[styles.radioButton, props.style?.radioButton, props.isDisabled && styles.disabledRadioButton]}>
          {props.isSelected && (
            <View
              style={[
                styles.selectedRadioButton,
                props.style?.selectedRadioButton,
                props.isDisabled && styles.disabledSelectedButton,
              ]}
            />
          )}
        </View>
        {!!props.label && (
          <Text
            style={[
              styles.radioButtonLabel,
              props.style?.labelText,
              props.isDisabled && styles.disabledRadioButtonLabel,
            ]}
          >
            {props.label}
          </Text>
        )}
      </View>
      {!!props.children && (
        <View style={[styles.radioButtonContentContainer, props.style?.contentContainer]}>{props.children}</View>
      )}
      {!!props.helperText && <Text style={[styles.helperText, props.style?.helperText]}>{props.helperText} </Text>}
      {!!props.errorText && <Text style={[styles.errorText, props.style?.errorText]}>{props.errorText} </Text>}
    </TouchableOpacity>
  );
};

export default React.memo(IMRadioButton);
