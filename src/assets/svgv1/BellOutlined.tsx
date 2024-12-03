import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IBellOutlinedProps {
  style?: ViewStyle;
  color?: string;
}

const BellOutlined: React.FunctionComponent<IBellOutlinedProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
      <Path
        d="M27.725 21.992C27.031 20.797 26 17.416 26 13a10 10 0 00-20 0c0 4.418-1.032 7.797-1.726 8.992A2 2 0 006 25h5.101a5 5 0 009.798 0H26a2 2 0 001.725-3.008zM16 27a3 3 0 01-2.828-2h5.655A2.999 2.999 0 0116 27zM6 23c.963-1.655 2-5.49 2-10a8 8 0 0116 0c0 4.506 1.035 8.341 2 10H6z"
        fill={props.color ?? "#000"}
      />
    </Svg>
  </View>
);

export default BellOutlined;
