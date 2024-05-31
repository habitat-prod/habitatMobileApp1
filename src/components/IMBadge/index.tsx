import React, { FunctionComponent, ReactElement } from 'react';
import { StyleProp, ViewStyle, TextStyle, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMIcon, { IconSvgProps } from '../../components/IMIcon';
import { BadgeVariant } from './helper';
import { useStyles } from './styles';
import { IconSize } from '../IMIcon/helper';

interface IMIconProps {
  iconSvg: ReactElement<IconSvgProps>;
  size?: IconSize;
  color?: string;
  iconContainerStyle?: ViewStyle;
}

export interface IMBadgeStyles {
  container?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

interface IMBadgeProps {
  id: string;
  key?: string;
  variant: BadgeVariant;
  label?: string | number;
  numberOfLines?: number;
  leftIcon?: IMIconProps;
  rightIcon?: IMIconProps;
  onClick?: () => void;
  disabled?: boolean;
  styles?: IMBadgeStyles;
}

const IMBadge: FunctionComponent<IMBadgeProps> = (props: IMBadgeProps) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.variant);

  const id = props.id || `IMBadge${Math.round(Math.random() * 10000)}`;

  return (
    <TouchableOpacity
      testID={id}
      accessibilityLabel={id}
      key={props.key}
      onPress={props.onClick}
      disabled={props.disabled}
      style={[styles.defaultContainer, props.styles?.container]}
    >
      <>
        {!!props.leftIcon && (
          <IMIcon
            testId={`${id}_leftIcon`}
            iconSvg={props.leftIcon.iconSvg}
            color={props.leftIcon.color ?? theme.Palette.background}
            size={props.leftIcon.size}
            containerStyle={props.leftIcon.iconContainerStyle}
          />
        )}
        {!!props.label && (
          <Text
            testID={`${id}_label`}
            accessibilityLabel={`${id}_label`}
            numberOfLines={props.numberOfLines || 1}
            style={[styles.label, props.styles?.titleStyle]}
          >
            {props.label}
          </Text>
        )}
        {!!props.rightIcon && (
          <IMIcon
            testId={`${id}_rightIcon`}
            iconSvg={props.rightIcon.iconSvg}
            color={props.rightIcon.color ?? theme.Palette.background}
            size={props.rightIcon.size}
            containerStyle={props.rightIcon.iconContainerStyle}
          />
        )}
      </>
    </TouchableOpacity>
  );
};

export default React.memo(IMBadge);
