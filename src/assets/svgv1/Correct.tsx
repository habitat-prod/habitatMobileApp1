import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICorrect {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Correct: React.FunctionComponent<ICorrect> = (props) => {
  return (
    <View style={props.style}>
       <Svg
      width="100%"
      height="100%"
      viewBox="0 0 33 20"
      fill={ props.color ?? "none" }
    >
      <Path d="M1.5 7.5l8 9.5L32 1" stroke="#000" strokeWidth={2} />
    </Svg>
    </View>
  );
};

export default Correct;
