import * as React from "react"
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { SvgProps, Path } from "react-native-svg";

interface IPauseFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const PauseFilled: React.FC<IPauseFilled> = (props: SvgProps) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
        <Path fill={props.color ?? "#686868"} d="M12 38h8V10h-8v28Zm16-28v28h8V10h-8Z" />
      </Svg>
    </View>

  );
}

export default PauseFilled;
