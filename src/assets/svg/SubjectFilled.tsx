import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ISubjectFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const SubjectFilled: React.FunctionComponent<ISubjectFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 21" fill="none">
        <Path
          d="M11.667 14.667H3.333v1.666h8.334v-1.666zm5-6.667H3.333v1.667h13.334V8zM3.333 13h13.334v-1.667H3.333V13zm0-8.333v1.666h13.334V4.667H3.333z"
          fill={props.color || '#706E6B'}
        />
      </Svg>
    </View>
  );
};

export default SubjectFilled;
