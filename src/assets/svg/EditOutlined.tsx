import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IEditOutlined {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const EditOutlined: React.FunctionComponent<IEditOutlined> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
        <Path
          d="M11.717 7.517l.766.766-7.55 7.55h-.766v-.766l7.55-7.55zm3-5.017a.834.834 0 00-.584.242l-1.525 1.525 3.125 3.125 1.525-1.525a.83.83 0 000-1.175l-1.95-1.95a.818.818 0 00-.591-.242zm-3 2.658L2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125z"
          fill={props.color ?? '#F15927'}
        />
      </Svg>
    </View>
  );
};

export default EditOutlined;
