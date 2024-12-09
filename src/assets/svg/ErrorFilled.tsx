import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IErrorFilled {
  color?: string;
  style?: ViewStyle;
}

const ErrorFilled: React.FunctionComponent<IErrorFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          fill="#E31B0C"
        />
      </Svg>
    </View>
  );
};

export default ErrorFilled;
