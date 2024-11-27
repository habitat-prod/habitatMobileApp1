import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ITimeOutlinedProps {
  style?: ViewStyle;
  color?: string;
}

const TimeOutlined: React.FunctionComponent<ITimeOutlinedProps> = (props) => (
  <View style={props.style}>
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M10 .667H6V2h4V.667zM7.333 9.333h1.334v-4H7.333v4zm5.354-4.407l.946-.946c-.286-.34-.6-.66-.94-.94l-.946.946A5.975 5.975 0 008 2.667a6 6 0 106 6 5.975 5.975 0 00-1.313-3.74zM8 13.334a4.663 4.663 0 01-4.667-4.667A4.663 4.663 0 018 4a4.663 4.663 0 014.667 4.666A4.663 4.663 0 018 13.333z"
        fill={props.color ?? "#663D00"}
      />
    </Svg>
  </View>
);

export default TimeOutlined;
