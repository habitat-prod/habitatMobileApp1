import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICircleOutlined {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const CircleOutlined: React.FC<ICircleOutlined> = (props) => {
  return (
    <View style={props.style}>
      <Svg width='100%' height='100%' viewBox="0 0 16 16" fill="none">
        <Path
          d="M8 1.333A6.66 6.66 0 001.333 8 6.66 6.66 0 008 14.667 6.66 6.66 0 0014.666 8 6.66 6.66 0 008 1.333zm0 12A5.332 5.332 0 012.666 8 5.332 5.332 0 018 2.667 5.332 5.332 0 0113.333 8 5.332 5.332 0 018 13.334z"
          fill={props.color ?? '#B8B8B8'}
        />
      </Svg>
    </View>
  );
};

export default CircleOutlined;
