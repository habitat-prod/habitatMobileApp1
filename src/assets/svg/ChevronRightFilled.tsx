import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IChevronRightFilled{
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const ChevronRightFilled: React.FC<IChevronRightFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={24} height={24} viewBox="0 0 24 24"fill="none">
        <Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill={props.color ?? "#1D1D1D" }/>
      </Svg>
    </View>
  );
};

export default ChevronRightFilled;
