


import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IRightTick {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const RightTick: React.FunctionComponent<IRightTick> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <Path d="M10 17.75H9.985C9.768 17.746 9.563 17.647 9.423 17.48L4.423 11.48C4.157 11.162 4.2 10.689 4.519 10.424C4.837 10.159 5.309 10.201 5.576 10.52L10.021 15.854L18.442 6.49803C18.72 6.19003 19.194 6.16603 19.502 6.44203C19.81 6.71903 19.835 7.19303 19.558 7.50203L10.558 17.502C10.415 17.66 10.213 17.75 10 17.75Z" fill="white" />
      </Svg>
    </View>
  );
};

export default RightTick;
