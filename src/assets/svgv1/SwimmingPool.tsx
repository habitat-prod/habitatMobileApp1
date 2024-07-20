import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

interface ISwimmingPool {
  style?: ViewStyle;
  color?: string;
}

const SwimmingPool: React.FunctionComponent<ISwimmingPool> = (props) => (
  <View style={props.style}>

  </View>
);

export default SwimmingPool;
