import React from 'react';
import { View, Text, TextStyle, ViewStyle, StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

import useStyle from './styles';

interface ITextProps {
  name: string;
  textStyle?: StyleProp<TextStyle>;
}

interface IInputAdornmentProps {
  icon?: React.ReactElement;
  containerStyle?: ViewStyle;
}

const InputAdornment: React.FunctionComponent<IInputAdornmentProps> = (props) => {
  const theme = useTheme();
  const styles = useStyle(theme);

  return (
    <View
      style={[styles.container, props.containerStyle]}
    >
      {props.icon}
    </View>
  );
};

export default InputAdornment;
