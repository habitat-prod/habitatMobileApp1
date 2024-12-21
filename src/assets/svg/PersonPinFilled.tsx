import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IPersonPinFilled {
  style?: ViewStyle;
  color?: string;
}

const PersonPinFilled: React.FunctionComponent<IPersonPinFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={24} height={24} viewBox="0 0 18 20" fill="none">
        <Path
          d="M9 0a9 9 0 00-9 9c0 4.17 2.84 7.67 6.69 8.69L9 20l2.31-2.31C15.16 16.67 18 13.17 18 9a9 9 0 00-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3a7.2 7.2 0 01-6-3.22C3.03 11.09 7 10 9 10c1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"
          fill={props.color ?? "#686868"}
        />
      </Svg>
    </View>
  );
};

export default PersonPinFilled;
