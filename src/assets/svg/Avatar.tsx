import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IAvatar {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const Avatar: React.FC<IAvatar> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path d="M10 10a3.332 3.332 0 100-6.667A3.332 3.332 0 1010 10zm0 1.667c-2.225 0-6.667 1.117-6.667 3.333v1.667h13.334V15c0-2.216-4.442-3.333-6.667-3.333z" fill={props.color ?? "#1D1D1D"}/>
      </Svg>
    </View>
  );
};

export default Avatar;
