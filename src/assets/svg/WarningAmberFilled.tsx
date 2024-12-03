import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IWarningAmberFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const WarningAmberFilled: React.FunctionComponent<IWarningAmberFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 17 16" fill="none">
        <Path
          d="M1.167 14h14.666L8.5 1.333 1.167 14zm8-2H7.833v-1.333h1.334V12zm0-2.667H7.833V6.667h1.334v2.666z"
          fill={props.color || '#FF9800'}
        />
      </Svg>
    </View>
  );
};

export default WarningAmberFilled;
