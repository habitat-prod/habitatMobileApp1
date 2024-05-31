import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IFilterListFilled {
  color?: string;
  style?: ViewStyle;
}

const FilterListFilled: React.FC<IFilterListFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
        <Path
          d="M8.333 15.5h3.334v-1.667H8.333V15.5zM2.5 5.5v1.667h15V5.5h-15zM5 11.333h10V9.667H5v1.666z"
          fill={props.color ?? '#F15927'}
        />
      </Svg>
    </View>
  );
};

export default FilterListFilled;
