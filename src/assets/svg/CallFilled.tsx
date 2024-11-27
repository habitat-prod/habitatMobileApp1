import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICallFilled {
  style?: ViewStyle;
  color?: string;
}

const CallFilled: React.FunctionComponent<ICallFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={32} height={32} viewBox="0 0 36 36" fill="none">
        <Path
          d="M26.01 21.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99h-3.46C9.65 9 9 9.24 9 9.99 9 19.28 16.73 27 26.01 27c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
          fill={props.color ?? "#686868"}
        />
      </Svg>
    </View>
  );
};

export default CallFilled;
