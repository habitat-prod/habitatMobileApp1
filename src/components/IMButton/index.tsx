import React, { FC } from 'react';
import { Text, ViewStyle, TextStyle, StyleProp, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { ButtonVariant, ButtonSize } from './helper';
import useStyles from './styles';

export interface IIMButtonStyles {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  leftIcon?: ViewStyle;
  rightIcon?: ViewStyle;
  loaderIcon?: ViewStyle;
}

export interface IIMButtonProps {
  id: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  title?: string;
  onClick?: (data?: any) => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  styles?: IIMButtonStyles;
}

const IMButton: FC<IIMButtonProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.variant ?? 'contained', props.size ?? 'medium', props.disabled ?? false);

  // TODO : add support for loader
  return (
    <TouchableOpacity
      testID={props.id}
      accessibilityLabel={props.id}
      onPress={props.onClick}
      disabled={props.disabled}
      style={[styles.container, props.styles?.container]}
    >
      <>
        {!!props.leftIcon && props.leftIcon}
        {!!props.title && <Text style={[styles.defaultTitleStyle, props.styles?.title]}>{props.title}</Text>}
        {!!props.rightIcon && props.rightIcon}
      </>
    </TouchableOpacity>
  );
};
export default React.memo(IMButton);
