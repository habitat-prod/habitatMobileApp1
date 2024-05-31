import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IAddFilledProps {
  style?: ViewStyle;
  color?: string;
}

const AddFilled: React.FunctionComponent<IAddFilledProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
      <Path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill={props.color ?? '#ffffff'} />
    </Svg>
  </View>
);

export default AddFilled;
