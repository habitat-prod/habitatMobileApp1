import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IAddCommentFilled {
  style?: ViewStyle;
  color?: string;
}

const AddCommentFilled: React.FunctionComponent<IAddCommentFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={36} height={36} viewBox="0 0 36 36" fill="none">
        <Path
          d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"
          fill="#686868"
        />
      </Svg>
    </View>
  );
};

export default AddCommentFilled;
