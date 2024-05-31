import React, { ReactElement } from 'react';
import { ViewStyle, StyleProp, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import { IconSize } from './helper';
import useStyle from './styles';

export interface IconSvgProps {
  color?: string;
  style?: ViewStyle;
}

export interface IMIconProps {
  testId: string;
  iconSvg: ReactElement<IconSvgProps>;
  iconName?: string; //TODO : TO be used for dynamic icon loading in future
  size?: IconSize;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  iconStyle?: ViewStyle;
  containerStyle?: StyleProp<ViewStyle>;
}

const IMIcon: React.FunctionComponent<IMIconProps> = (props) => {
  const theme = useTheme();
  const styles = useStyle(theme, props.size ?? 'small');

  const iconSvg = React.useMemo(() => {
    return React.cloneElement(props.iconSvg, {
      style: { ...styles.iconStyle, ...props.iconStyle },
      color: props.color,
    });
  }, [props.iconSvg, props.size, props.color]);

  return (
    <TouchableOpacity
      testID={props.testId}
      accessibilityLabel={props.testId}
      activeOpacity={props.disabled ? 1 : 0.2}
      hitSlop={styles.hitSlop}
      onPress={props.onClick}
      disabled={props.disabled}
      style={[styles.container, props.containerStyle]}
    >
      {iconSvg}
    </TouchableOpacity>
  );
};

export default IMIcon;
