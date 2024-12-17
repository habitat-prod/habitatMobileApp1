import React, { FunctionComponent, ReactElement } from 'react';
import { View, Text, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMIcon, { IconSvgProps } from '../../components/IMIcon';
import { useStyle } from './styles';
import CancelFilled from '../../assets/svg/CancelFilled';

interface ChipStyle {
  containerStyle?: StyleProp<ViewStyle>;
  leftIconStyle?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
  rightIconStyle?: ViewStyle;
}

interface IMChipsProps {
  id: string;
  title: string;
  type: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  variant?: 'solid' | 'outline';
  key?: number;
  leftIconSvg?: ReactElement<IconSvgProps>;
  onClose?: () => void;
  showCloseIcon?: boolean;
  styles?: ChipStyle;
}

const IMChip: FunctionComponent<IMChipsProps> = (props: IMChipsProps) => {
  const theme = useTheme();
  const styles = useStyle(theme);

  return (
    <View
      testID={props.id}
      accessibilityLabel={props.id}
      style={[
        styles.defaultContainerStyle,
        props.type === 'secondary' && styles.solidSecondary,
        props.variant === 'outline' && styles.outline,
        props.size === 'small' && styles.small,
        props.styles?.containerStyle,
      ]}
    >
      {!!props.leftIconSvg && (
        <IMIcon testId={props.id} iconStyle={props.styles?.leftIconStyle} iconSvg={props.leftIconSvg} />
      )}
      <Text
        style={[
          styles.defaultText,
          props.type === 'secondary' && styles.secondaryText,
          props.type === 'primary' && props.variant === 'outline' && styles.outlineText,
          props.styles?.textStyle,
        ]}
      >
        {props.title}
      </Text>
      {props.showCloseIcon && (
        <IMIcon
          testId={props.id}
          iconSvg={<CancelFilled />}
          color={props.type === 'secondary' ? theme.Palette.grey[600] : theme.Palette.background}
          size={props.size}
          iconStyle={props.styles?.rightIconStyle}
          onClick={props.onClose}
        />
      )}
    </View>
  );
};
export default React.memo(IMChip);
