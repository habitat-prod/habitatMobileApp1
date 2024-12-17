import React, { ReactElement } from 'react';
import { ViewStyle, TextStyle, View, Text, StyleProp, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMAvatar from '../IMAvatar';
import { AvatarVariant } from '../IMAvatar/helper';
import IMBadge, { IMBadgeStyles } from '../IMBadge';
import { BadgeVariant } from '../IMBadge/helper';
import IMButton, { IIMButtonStyles } from '../IMButton';
import { ButtonSize, ButtonVariant } from '../IMButton/helper';
import IMCheckBox from '../IMCheckBox';
import IMIcon, { IconSvgProps } from '../IMIcon';
import { IconSize } from '../IMIcon/helper';
import IMRadioButton from '../IMRadioButton';
import IMSwitch, { IStyleProps } from '../IMSwitch';
import { RightItemType } from './helper';
import useStyle from './styles';

export interface IMIconProps {
  iconSvg: ReactElement<IconSvgProps>;
  size?: IconSize;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

interface IIMAvatarProps {
  imageUri?: string;
  title?: string;
  icon?: JSX.Element;
  variant?: AvatarVariant;
  containerStyle?: StyleProp<ViewStyle>;
}

interface IMCheckBoxProps {
  name: string;
  isSelected?: boolean;
  onChange?: (name: string, selected: boolean, index: number) => void;
  isDisabled?: boolean;
  index?: number;
}

interface IMRadioButtonProps {
  name: string;
  isSelected?: boolean;
  index?: number;
  onChange?: (name: string, selected: boolean, index?: number) => void;
}

interface IMProgressProps {
  //TODO : To be changed when IMProgress is Merged
  // percent: number;
  // height?: number;
  primaryProgressColor?: string;
  secondarycolor?: string;
}

interface IMSwitchProps {
  name: string;
  active?: boolean;
  onToggleBtnClick?: (name: string, value: boolean) => void;
  disabled?: boolean;
  label?: string;
  styles?: IStyleProps;
}

interface IMBadgeProps {
  variant: BadgeVariant;
  label: string | number;
  onClick?: () => void;
  disabled?: boolean;
  styles?: IMBadgeStyles;
}

interface IMButtonProps {
  title?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (data?: any) => void;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  styles?: IIMButtonStyles;
}
interface IRightItemProps {
  icon?: IMIconProps;
  badge?: IMBadgeProps;
  switch?: IMSwitchProps;
  checkbox?: IMCheckBoxProps;
  radioButton?: IMRadioButtonProps;
  button?: IMButtonProps;
}

interface ILeftIconItemProps {
  type: 'icon';
  icon: IMIconProps;
}

interface ILeftAvatarItemProps {
  type: 'avatar';
  avatar: IIMAvatarProps;
}

interface ILeftCheckboxItemProps {
  type: 'checkbox';
  checkbox: IMCheckBoxProps;
}

interface ILeftRadioButtonItemProps {
  type: 'radioButton';
  radioButton: IMRadioButtonProps;
}

interface ILeftProgressItemProps {
  type: 'progress';
  progress: IMProgressProps;
}

type ILeftItemProps =
  | ILeftIconItemProps
  | ILeftAvatarItemProps
  | ILeftCheckboxItemProps
  | ILeftRadioButtonItemProps
  | ILeftProgressItemProps;

interface IStylesProps {
  container?: StyleProp<ViewStyle>;
  textContainer?: ViewStyle;
  primaryText?: StyleProp<TextStyle>;
  secondaryText?: TextStyle;
  rightItemContainer?: ViewStyle;
}

interface IMListItemProps {
  testId: string;
  key?: string;
  name: string;
  primaryText: string;
  secondaryText?: string;
  primaryTextNumberOfLines?: number;
  secondaryTextNumberOfLines?: number;
  isSelected?: boolean;
  onChange?: (name: string, index?: number) => void;
  isDisabled?: boolean;
  index?: number;
  leftItem?: ILeftItemProps;
  rightItems?: IRightItemProps;
  rightItemsOrder?: Array<keyof IRightItemProps>;
  activeOpacity?: number;
  styles?: IStylesProps;
}

const IMListItem: React.FunctionComponent<IMListItemProps> = (props) => {
  const theme = useTheme();
  const rightItemsCount = Object.keys(props.rightItems ?? {}).length;
  const styles = useStyle(theme, props.isSelected ?? false, rightItemsCount, props.isDisabled ?? false);
  const rightItemsOrder = props.rightItemsOrder ?? ['badge', 'switch', 'checkbox', 'radioButton', 'button', 'icon'];

  const renderLeftItem = (leftItem: ILeftItemProps) => {
    switch (leftItem.type) {
      case 'icon':
        return <IMIcon testId={`${props.testId}-left-item-icon`} {...leftItem.icon} />;
      case 'avatar':
        return (
          <IMAvatar
            testId={`${props.testId}-left-item-avatar`}
            styles={{ containerStyle: [styles.leftAvatarContainer, leftItem.avatar.containerStyle] }}
            {...leftItem.avatar}
          />
        );
      case 'checkbox':
        return (
          <IMCheckBox
            id={`${props.testId}-left-item-checkbox`}
            styles={{ container: styles.leftCheckBoxContainer }}
            {...leftItem.checkbox}
          />
        );
      case 'radioButton':
        return <IMRadioButton id={`${props.testId}-left-item-radioButton`} {...leftItem.radioButton} />;
      default:
        return null;
    }
  };

  const componentMap = {
    icon: props.rightItems?.icon && (
      <IMIcon
        key={`${props.testId}-right-item-icon`}
        testId={`${props.testId}-right-item-icon`}
        {...props.rightItems?.icon}
      />
    ),
    badge: props.rightItems?.badge && (
      <IMBadge
        key={`${props.testId}-right-item-badge`}
        id={`${props.testId}-right-item-badge`}
        {...props.rightItems?.badge}
      />
    ),
    button: props.rightItems?.button && (
      <IMButton
        key={`${props.testId}-right-item-button`}
        id={`${props.testId}-right-item-button`}
        {...props.rightItems?.button}
      />
    ),
    radioButton: props.rightItems?.radioButton && (
      <IMRadioButton
        key={`${props.testId}-right-item-radioButton`}
        id={`${props.testId}-right-item-radioButton`}
        {...props.rightItems?.radioButton}
      />
    ),
    switch: props.rightItems?.switch && (
      <IMSwitch
        key={`${props.testId}-right-item-switch`}
        testId={`${props.testId}-right-item-switch`}
        {...props.rightItems?.switch}
      />
    ),
    checkbox: props.rightItems?.checkbox && (
      <IMCheckBox
        key={`${props.testId}-right-item-checkbox`}
        id={`${props.testId}-right-item-checkbox`}
        {...props.rightItems?.checkbox}
      />
    ),
  };

  const onChange = () => {
    props.onChange?.(props.name, props.index ?? 0);
  };

  return (
    <TouchableOpacity
      testID={props.testId}
      key={props.key ?? ''}
      activeOpacity={props.isDisabled ? 1 : props.activeOpacity ?? 0.2}
      onPress={onChange}
      disabled={props.isDisabled ?? false}
      style={[styles.container, props.styles?.container]}
    >
      <>
        {!!props.leftItem && renderLeftItem(props.leftItem)}
        <View style={[styles.textContainer, props.styles?.textContainer]}>
          <Text numberOfLines={props.primaryTextNumberOfLines} style={[styles.primaryText, props.styles?.primaryText]}>
            {props.primaryText}
          </Text>
          {!!props.secondaryText && (
            <Text
              numberOfLines={props.secondaryTextNumberOfLines}
              style={[styles.secondaryText, props.styles?.secondaryText]}
            >
              {props.secondaryText}
            </Text>
          )}
        </View>
        {!!props.rightItems && (
          <View style={[styles.rightItemContainer, props.styles?.rightItemContainer]}>
            {rightItemsOrder.map((item: RightItemType) => componentMap[item])}
          </View>
        )}
      </>
    </TouchableOpacity>
  );
};

export default IMListItem;
