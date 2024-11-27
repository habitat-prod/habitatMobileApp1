import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IDeleteOutlineFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const DeleteOutlineFilled: React.FC<IDeleteOutlineFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
        <Path
          d="M5 15.833c0 .917.75 1.667 1.667 1.667h6.667c.916 0 1.666-.75 1.666-1.667v-10H5v10zM6.667 7.5h6.667v8.333H6.667V7.5zm6.25-4.167l-.833-.833H7.917l-.833.833H4.167V5h11.667V3.333h-2.917z"
          fill={props.color || '#F44336'}
        />
      </Svg>
    </View>
  );
};

export default DeleteOutlineFilled;
