import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ILocationOnOutlined {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const LocationOnOutlined: React.FunctionComponent<ILocationOnOutlined> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
          fill={props.color ?? "#455266"}
        />
        <Path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill={props.color ?? "#455266"} />
      </Svg>
    </View>
  );
};

export default LocationOnOutlined;
