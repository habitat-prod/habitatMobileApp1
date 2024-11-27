import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ICalenderTodayFilled {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const CalenderTodayFilled: React.FunctionComponent<ICalenderTodayFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <Path
          d="M20 3.5h-1v-2h-2v2H7v-2H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm0 18H4v-13h16v13z"
          fill={props.color ?? '#686868'}
        />
      </Svg>
    </View>
  );
};

export default CalenderTodayFilled;
