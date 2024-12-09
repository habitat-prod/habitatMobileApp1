import React from 'react';
import { View, Text, TextStyle, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMIcon, { IMIconProps } from '../../../components/IMIcon';
import IMButton, { IIMButtonProps } from '../../IMButton';
import IMMenu, { IMMenuProps } from '../../IMMenu';
import useStyle from './styles';

interface ITextProps {
  name: string;
  textStyle?: StyleProp<TextStyle>;
}

interface IInputAdornmentProps {
  testId: string;
  icon?: IMIconProps;
  text?: ITextProps;
  button?: IIMButtonProps;
  menu?: IMMenuProps;
  containerStyle?: ViewStyle;
}

const InputAdornment: React.FunctionComponent<IInputAdornmentProps> = (props) => {
  const theme = useTheme();
  const styles = useStyle(theme);

  return (
    <View
      testID={`${props.testId}-container`}
      accessibilityLabel={`${props.testId}-container`}
      style={[styles.container, props.containerStyle]}
    >
      {!!props.text?.name && <Text style={props.text.textStyle}>{props.text.name}</Text>}
      {!!props.button && <IMButton {...props.button} />}
      {!!props.icon && <IMIcon {...props.icon} />}
      {!!props.menu && <IMMenu {...props.menu} />}
    </View>
  );
};

export default InputAdornment;
