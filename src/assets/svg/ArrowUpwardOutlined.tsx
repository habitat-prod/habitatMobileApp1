import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IArrowUpwardOutlinedProps {
  style?: ViewStyle;
  color?: string;
}

const ArrowUpwardOutlined: React.FunctionComponent<IArrowUpwardOutlinedProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
      <Path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" fill={props.color ?? '#686868'} />
    </Svg>
  </View>
);

export default ArrowUpwardOutlined;
