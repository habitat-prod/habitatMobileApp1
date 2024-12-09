import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IUser {
  style?: StyleProp<ViewStyle>;
}

const User: React.FunctionComponent<IUser> = (props) => {
  return (
    <View style={props.style}>
      <Svg width={'100%'} height={'100%'} viewBox="0 0 16 16" fill="none">
        <Path
          d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          fill="#686868"
        />
      </Svg>
    </View>
  );
};

export default User;
