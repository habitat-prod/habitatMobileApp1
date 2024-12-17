import React, { FC, ReactElement } from 'react';
import { Text, ViewStyle, TouchableHighlight } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMIcon, { IconSvgProps } from '../IMIcon';
import { IconSize } from '../IMIcon/helper';
import { FabSize, FabVariant } from './helper';
import { useStyle } from './styles';

interface IIMIconProps {
  iconSvg: ReactElement<IconSvgProps>;
  size?: IconSize;
  disabled?: boolean;
  onClick?: () => void;
}

interface IIMFabStyle {
  title?: ViewStyle;
  container?: ViewStyle;
}

export interface IIMFabProps {
  testId: string;
  variant: FabVariant;
  size?: FabSize;
  title?: string;
  icon?: IIMIconProps;
  disabled?: boolean;
  iconDisabled?: boolean;
  onClick?: () => void;
  styles?: IIMFabStyle;
}

const IMFab: FC<IIMFabProps> = (props: IIMFabProps) => {
  const theme = useTheme();
  const styles = useStyle(theme, props.size ?? 'medium', props.variant);

  return (
    <TouchableHighlight
      testID={props.testId}
      accessibilityLabel={props.testId}
      onPress={props.onClick}
      disabled={props.disabled}
      style={[styles.container, props.styles?.container, props.disabled && styles.disabledContainer]}
      underlayColor={theme.Palette.IMPrimary.dark}
    >
      <>
        {!!props.icon && (
          <IMIcon
            testId={`${props.testId}-icon`}
            {...props.icon}
            color={props.disabled ? theme.Palette.grey[400] : theme.Palette.background}
            disabled={props.iconDisabled}
          />
        )}
        {!!props.title && props.variant === 'extended' && (
          <Text
            testID={`${props.testId}-title`}
            style={[styles.title, props.styles?.title, props.disabled && styles.disabledTitle]}
          >
            {props.title}
          </Text>
        )}
      </>
    </TouchableHighlight>
  );
};

export default React.memo(IMFab);
