import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface IPeopleFilledProps {
  style?: ViewStyle;
  color?: string;
}

const PeopleFilled: React.FunctionComponent<IPeopleFilledProps> = (props) => (
  <View style={props.style}>
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M13.333 9.167a2.49 2.49 0 002.492-2.5 2.497 2.497 0 10-4.992 0c0 1.383 1.117 2.5 2.5 2.5zm-6.666 0a2.49 2.49 0 002.491-2.5 2.497 2.497 0 10-4.992 0c0 1.383 1.117 2.5 2.5 2.5zm0 1.666c-1.942 0-5.834.975-5.834 2.917v2.083H12.5V13.75c0-1.942-3.892-2.917-5.833-2.917zm6.666 0c-.241 0-.516.017-.808.042.967.7 1.642 1.642 1.642 2.875v2.083h5V13.75c0-1.942-3.892-2.917-5.834-2.917z"
        fill={props.color ?? '#757575'}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3497_1729"
          x1={0.833374}
          y1={9.9663}
          x2={19.1667}
          y2={9.9663}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F55929" />
          <Stop offset={1} stopColor="#FB8B4A" />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);

export default PeopleFilled;
