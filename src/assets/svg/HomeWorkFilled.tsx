import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IHomeWorkFilled {
  style?: ViewStyle;
  color?: string;
}

const HomeWorkFilled: React.FunctionComponent<IHomeWorkFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path d="M8.17 5.7L1 10.48V21h5v-8h4v8h5V10.25L8.17 5.7zM17 7h2v2h-2V7z" fill={props.color ?? '#F15927'} />
        <Path
          d="M10 3v1.51l2 1.33L13.73 7H15v.85l2 1.34V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"
          fill={props.color ?? '#F15927'}
        />
      </Svg>
    </View>
  );
};

export default HomeWorkFilled;
