import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import { useTheme } from 'react-native-paper';

import useStyles from './styles';

interface IIMOverlayLoader {
  visible?: boolean;
  color?: string;
  size?: number;
  transparent?: boolean;
  loaderText?: string;
  textStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  loaderStyle?: StyleProp<ViewStyle>;
}

const IMOverlayLoader: React.FC<IIMOverlayLoader> = (props: IIMOverlayLoader) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Modal visible={props.visible} transparent={props.transparent ?? true}>
      <View style={[styles.container, props.containerStyle]}>
        <ActivityIndicator
          color={props.color ?? theme.Palette.IMPrimary.main}
          size={props.size ?? 40}
          style={props.loaderStyle}
        />
        {props.loaderText && (
          <View style={props.textContainerStyle}>
            <Text style={[styles.textContent, props.textStyle]}>{props.loaderText}</Text>
          </View>)}
      </View>
    </Modal>
  );
};

export default IMOverlayLoader;
