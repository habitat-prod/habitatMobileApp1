import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IHomeWorkOutlined {
  style?: ViewStyle;
  color?: string;
}

const HomeWorkOutlined: React.FunctionComponent<IHomeWorkOutlined> = props => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path
          d="M17 15h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V7zm-3.26 0l1.26.84V7h-1.26z"
          fill={props.color ?? "#757575"}
        />
        <Path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3H10z" fill={props.color ?? "#757575"} />
        <Path
          d="M8.17 5.7L15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z"
          fill={props.color ?? "#757575"}
        />
      </Svg>
    </View>
  );
};

export default HomeWorkOutlined;