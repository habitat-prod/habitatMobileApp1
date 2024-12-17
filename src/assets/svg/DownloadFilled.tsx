import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IArrowBackFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const DownloadFilled: React.FunctionComponent<IArrowBackFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 17 16" fill="none">
        <Path
          d="M3.833 13.333h9.334V12H3.833v1.333zM13.167 6H10.5V2h-4v4H3.833L8.5 10.667 13.167 6z"
          fill={props.color ?? "#F15927"}
        />
      </Svg>
    </View>
  );
};

export default DownloadFilled;
