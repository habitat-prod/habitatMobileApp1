import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import ArrowBackFilled from '../../assets/svg/ArrowBackFilled';
import { useStyles } from './styles';

interface IMActionHeaderBarStyles {
  container?: StyleProp<ViewStyle>;
  topSection?: StyleProp<ViewStyle>;
  bottomSection?: StyleProp<ViewStyle>;
  backBtn?: ViewStyle;
  title?: TextStyle;
  leftHeaderContainer?: ViewStyle;
  headerRightContainer?: ViewStyle;
}

interface IMActionHeaderBarProps {
  id?: string;
  hideBackButton?: boolean;
  backBtnAction?: () => void;
  title?: string;
  headerRight?: JSX.Element;
  bottomCustomComponent?: React.ReactNode;
  styles?: IMActionHeaderBarStyles;
}

const IMActionHeaderBar: React.FunctionComponent<IMActionHeaderBarProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, props.styles?.container]}>
      <View style={[styles.containerSection, props.styles?.topSection]}>
        <View style={[styles.leftHeaderContainer, props.styles?.leftHeaderContainer]}>
          {!props.hideBackButton && (
            <TouchableOpacity onPress={props.backBtnAction} testID={props.id ?? 'backBtn'}>
              <ArrowBackFilled style={[styles.backBtn, props.styles?.backBtn]} />
            </TouchableOpacity>
          )}
          {!!props.title && <Text style={[styles.title, props.styles?.title]}>{props.title}</Text>}
        </View>
        {!!props.headerRight && (
          <View style={[styles.defaultHeaderRightContainer, props.styles?.headerRightContainer]}>
            {props.headerRight}
          </View>
        )}
      </View>
      {!!props.bottomCustomComponent && (
        <View style={[styles.customBottomContainer, props.styles?.bottomSection]}>{props.bottomCustomComponent}</View>
      )}
    </View>
  );
};

export default React.memo(IMActionHeaderBar);
