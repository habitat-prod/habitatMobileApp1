import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IArrowBackFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const ArrowBackFilled: React.FunctionComponent<IArrowBackFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill={props.color ?? '#1D1D1D'} />
      </Svg>
    </View>
  );
};

export default ArrowBackFilled;
