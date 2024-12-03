import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICheckCircle {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const CheckCircle: React.FunctionComponent<ICheckCircle> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
        <Path
          d="M7 .332A6.67 6.67 0 00.333 6.999 6.67 6.67 0 007 13.665 6.67 6.67 0 0013.667 7 6.669 6.669 0 007 .332zm-1.333 10L2.333 6.999l.94-.94 2.394 2.386 5.06-5.06.94.947-6 6z"
          fill={props.color ?? '#4CAF50'}
        />
      </Svg>
    </View>
  );
};

export default CheckCircle;
