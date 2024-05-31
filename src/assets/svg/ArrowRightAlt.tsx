import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IArrowRightAltProps {
  style?: ViewStyle;
  color?: string;
}

const ArrowRightAlt: React.FunctionComponent<IArrowRightAltProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
      <Path d="M13.341 9.166H3.333v1.667h10.008v2.5L16.666 10l-3.325-3.333v2.5z" fill={props.color ?? '#686868'} />
    </Svg>
  </View>
);

export default ArrowRightAlt;
