import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IClose {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Close: React.FunctionComponent<IClose> = (props) => {
  return (
    <View style={props.style}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 28 28"
        fill="none"
      >
        <Path
          d="M22.494 21.256a.875.875 0 01-1.238 1.238L14 15.237l-7.256 7.257a.876.876 0 01-1.238-1.238L12.763 14 5.506 6.744a.875.875 0 111.238-1.238L14 12.763l7.256-7.257a.876.876 0 011.238 1.238L15.237 14l7.257 7.256z"
          fill="#000"
        />
      </Svg>
    </View>
  );
};

export default Close;
