import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IArrowDropDownFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const ArrowDropDownFilled: React.FunctionComponent<IArrowDropDownFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 10 5" fill={props.color}>
        <Path d="M0 0l5 5 5-5H0z" fill="#757575" />
      </Svg>
    </View>
  );
};

export default ArrowDropDownFilled;
