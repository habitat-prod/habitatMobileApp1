import React from 'react';
import {View, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IErrorOutlineFilled {
  color?: string;
  style?: ViewStyle;
}

const ErrorOutlineFilled: React.FunctionComponent<
  IErrorOutlineFilled
> = props => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path
          d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          fill={props.color ?? '#F44336'}
        />
      </Svg>
    </View>
  );
};

export default ErrorOutlineFilled;
