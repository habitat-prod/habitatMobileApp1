import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IArrowRightFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const ArrowRightFilled: React.FunctionComponent<IArrowRightFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
        <Path d="M7.158 13.825L10.975 10 7.158 6.175 8.333 5l5 5-5 5-1.175-1.175z" fill={props.color ?? "#F15927"} />
      </Svg>
    </View>
  );
};

export default ArrowRightFilled;
