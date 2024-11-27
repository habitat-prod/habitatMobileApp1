import React, { FunctionComponent } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import CircleOutlined from '../../assets/svg/CircleOutlined';
import { useStyles } from './styles';

interface IIMVerticalTrainStyles {
  rootContainer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  contentContainer?: StyleProp<ViewStyle>;
  circleIcon?: StyleProp<ViewStyle>;
}

interface IIMVerticalTrain {
  title: string;
  children: JSX.Element[] | JSX.Element;
  styles?: IIMVerticalTrainStyles;
}

const IMVerticalTrain: FunctionComponent<IIMVerticalTrain> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={[styles.rootContainer, props.styles?.rootContainer]}>
      <View style={[styles.container, props.styles?.container]}>
        <Text style={[styles.title, props.styles?.title]}>{props.title}</Text>
        <View style={props.styles?.contentContainer}>{props.children}</View>
      </View>
      <CircleOutlined style={[styles.circleIcon, props.styles?.circleIcon]} />
    </View>
  );
};

export default IMVerticalTrain;
