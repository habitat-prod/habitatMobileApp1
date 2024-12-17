import * as React from "react"
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { SvgProps, Path } from "react-native-svg";

interface IPlayArrowFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const PlayArrowFilled: React.FC<IPlayArrowFilled> = (props: SvgProps) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
        <Path fill={props.color ?? "#686868"} d="M16 10v28l22-14-22-14Z" />
      </Svg>
    </View>

  );
}

export default PlayArrowFilled;
