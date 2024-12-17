import * as React from "react"
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { SvgProps, Path } from "react-native-svg";

interface IRightArrowFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const RightArrowFilled: React.FC<IRightArrowFilled> = (props: SvgProps) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path d="M.5 7.75L4.25 4 .5.25v7.5z" fill={props.color ?? "#00766C"} />
      </Svg>
    </View>

  );
}

export default RightArrowFilled;
