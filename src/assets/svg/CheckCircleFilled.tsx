import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICheckCircleFilledProps {
  style?: ViewStyle;
  color?: string;
}

const CheckCircleFilled: React.FunctionComponent<ICheckCircleFilledProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 1.333A6.67 6.67 0 001.333 8 6.669 6.669 0 008 14.667 6.669 6.669 0 0014.667 8 6.67 6.67 0 008 1.333zm-1.333 10L3.334 8l.94-.94 2.393 2.387 5.06-5.06.94.946-6 6z"
        fill={props.color ?? "#3B873E"}
      />
    </Svg>
  </View>
);

export default CheckCircleFilled;