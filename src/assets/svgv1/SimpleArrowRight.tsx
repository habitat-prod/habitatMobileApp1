import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

interface ISimpleArrowRightProps {
  style?: ViewStyle;
  color?: string;
}

const SimpleArrowRight: React.FunctionComponent<ISimpleArrowRightProps> = props => (
  <View style={props.style}>
     <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill={"none" ?? props.color}
    >
      <Path
        d="M14.545 8.987a.344.344 0 000-.487l-2.192-2.192a.344.344 0 10-.487.487l1.949 1.949-1.949 1.948a.345.345 0 00.487.487l2.192-2.192zm-10.003.101h9.76v-.689h-9.76v.689z"
        fill="#7D7F88"
      />
    </Svg>
  </View>
);

export default SimpleArrowRight;
