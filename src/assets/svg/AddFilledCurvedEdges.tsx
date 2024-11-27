import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IAddFilledCurvedEdges {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const AddFilledCurvedEdges: React.FC<IAddFilledCurvedEdges> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
        <Path
          d="M13 5.5c.531 0 1 .469 1 1v1c0 .563-.469 1-1 1H8.5V13c0 .563-.469 1-1 1h-1c-.563 0-1-.438-1-1V8.5H1c-.563 0-1-.438-1-1v-1c0-.531.438-1 1-1h4.5V1c0-.531.438-1 1-1h1c.531 0 1 .469 1 1v4.5H13z"
          fill={props.color ?? "#fff"}
        />
      </Svg>
    </View>
  );
};

export default AddFilledCurvedEdges;
