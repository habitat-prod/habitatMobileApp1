import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

interface ICircleFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const CircleFilled: React.FC<ICircleFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 4 5" fill="none">
        <G clipPath="url(#clip0_3490_1214)">
          <Path
            d="M2 .833C1.078.833.333 1.578.333 2.5S1.078 4.167 2 4.167 3.667 3.422 3.667 2.5 2.922.833 2 .833z"
            fill={props.color || '#686868'}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_3490_1214">
            <Path fill="#fff" transform="translate(0 .5)" d="M0 0H4V4H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default CircleFilled;
