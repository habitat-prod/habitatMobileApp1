import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IClose {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const Close: React.FunctionComponent<IClose> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
        <Path
          d="M15.8327 5.34102L14.6577 4.16602L9.99935 8.82435L5.34102 4.16602L4.16602 5.34102L8.82435 9.99935L4.16602 14.6577L5.34102 15.8327L9.99935 11.1743L14.6577 15.8327L15.8327 14.6577L11.1743 9.99935L15.8327 5.34102Z"
          fill={props.color ?? '#686868'}
        />
      </Svg>
    </View>
  );
};

export default Close;
