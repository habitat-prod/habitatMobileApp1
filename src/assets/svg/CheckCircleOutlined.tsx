import React from 'react';
import {View, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface ICheckCircleOutlined {
  color?: string;
  style?: ViewStyle;
}

const CheckCircleOutlined: React.FunctionComponent<
  ICheckCircleOutlined
> = props => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z"
          fill={props.color ?? '#4CAF50'}
        />
      </Svg>
    </View>
  );
};

export default CheckCircleOutlined;
