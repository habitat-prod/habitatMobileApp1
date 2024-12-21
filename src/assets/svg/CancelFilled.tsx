import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICancelFilledProps {
  style?: ViewStyle;
  color?: string;
}

const CancelFilled: React.FunctionComponent<ICancelFilledProps> = (props) => (
  <View style={props.style}>
    <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 1.333A6.66 6.66 0 001.333 8 6.66 6.66 0 008 14.667 6.66 6.66 0 0014.667 8 6.66 6.66 0 008 1.333zm3.333 9.06l-.94.94L8 8.94l-2.393 2.393-.94-.94L7.06 8 4.667 5.607l.94-.94L8 7.06l2.393-2.393.94.94L8.94 8l2.393 2.393z"
        fill={props.color ?? '#BDBDBD'}
      />
    </Svg>
  </View>
);

export default CancelFilled;
