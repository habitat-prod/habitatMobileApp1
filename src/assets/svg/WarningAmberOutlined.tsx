import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IWarningAmberOutlinedProps {
  style?: ViewStyle;
  color?: string;
}

const WarningAmberOutlined: React.FunctionComponent<IWarningAmberOutlinedProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 22 19" fill="none">
      <Path
        d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
        fill={props.color ?? '#FF9800'}
      />
    </Svg>
  </View>
);

export default WarningAmberOutlined;
