import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

interface IArrowRightProps {
  style?: ViewStyle;
  color?: string;
}

const ArrowRight: React.FunctionComponent<IArrowRightProps> = props => (
  <View style={props.style}>
    <Svg
      width={35}
      height={36}
      viewBox="0 0 35 36"
      fill="none"
    >
      <Circle
        cx={17.5194}
        cy={18.0001}
        r={12.5}
        transform="rotate(-36.438 17.52 18)"
        fill="url(#paint0_linear_453_421)"
      />
      <Path
        d="M23.627 13.889a.5.5 0 00-.42-.57l-4.45-.67a.5.5 0 10-.149.99l3.956.595-.596 3.955a.5.5 0 10.99.15l.67-4.45zM12.033 22.63l11.397-8.415-.594-.804-11.397 8.414.594.805z"
        fill={"#fff" ?? props.color}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_453_421"
          x1={5.01937}
          y1={6.79316}
          x2={28.2952}
          y2={30.5001}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#06B8C3" />
          <Stop offset={1} stopColor="#3266AE" />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);

export default ArrowRight;
