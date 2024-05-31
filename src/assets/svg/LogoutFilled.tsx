import * as React from "react";
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from "react-native-svg";

interface ILogoutFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const LogoutFilled: React.FunctionComponent<ILogoutFilled> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" fill="none">
      <Path
        fill={props.color ?? "#686868"}
        d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5ZM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5Z"
      />
    </Svg>
  </View>
);
export default LogoutFilled;
