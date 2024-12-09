import React, { FunctionComponent, MutableRefObject, useRef } from 'react';
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { useTheme } from 'react-native-paper';

import { useTranslation } from 'react-i18next';
import ArrowDropDownFilled from '../../assets/svg/ArrowDropDownFilled';
import IMIcon from '../../components/IMIcon';
import useStyles from './styles';

export interface IMMenuItem {
  id: string | number;
  label: string;
  disabled?: boolean;
  disabledTextColor?: string;
}

interface IStylesProps {
  container?: ViewStyle;
  selectedText?: TextStyle;
  itemTextStyle?: TextStyle;
  itemContainer?: ViewStyle;
}

export interface IMMenuProps {
  testId: string;
  name: string;
  items: Array<IMMenuItem>;
  value: string | number;
  onChange?: (fieldName: string, id: string | number) => void;
  isDisabled?: boolean;
  styles?: IStylesProps;
}

const IMMenu: FunctionComponent<IMMenuProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const menu = useRef() as MutableRefObject<Menu>;
  const { t } = useTranslation('common');

  const getLabel = (id: number | string) => {
    let label = t('common:noOptionsAvailable');
    if (props.items?.length) {
      const record = props.items?.find((item) => item.id === id);
      label = record?.label ?? '';
    }
    return label;
  };

  const hideMenu = () => menu.current?.hide();
  const showMenu = () => {
    !props.isDisabled && menu.current?.show();
  };

  return (
    <TouchableOpacity
      onPress={showMenu}
      style={[styles.container, props.styles?.container, props?.isDisabled && styles.disabled]}
    >
      <Menu
        ref={menu}
        button={
          <View style={styles.menuButton}>
            <Text style={[styles.text, props.styles?.selectedText]}>{getLabel(props.value) ?? t('common:select')}</Text>
            <IMIcon testId={`${props.testId}_IMMenu`} iconSvg={<ArrowDropDownFilled style={styles.icon} />} />
          </View>
        }
      >
        {props.items.map((item) => {
          return (
            <MenuItem
              disabled={item.disabled}
              disabledTextColor={item.disabledTextColor}
              onPress={() => {
                hideMenu();
                props.onChange?.(props.name, item.id);
              }}
              key={item.label}
              textStyle={styles.text}
              style={props.styles?.itemContainer}
            >
              <Text>{item.label}</Text>
            </MenuItem>
          );
        })}
      </Menu>
    </TouchableOpacity>
  );
};
export default IMMenu;
