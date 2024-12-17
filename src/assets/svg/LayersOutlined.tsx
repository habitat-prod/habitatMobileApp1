import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ILayersOutlined {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const LayersOutlined: React.FunctionComponent<ILayersOutlined> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
        <Path
          d="M9.992 15.45L3.85 10.675l-1.35 1.05 7.5 5.833 7.5-5.833-1.358-1.058-6.15 4.783zM10 13.333l6.133-4.775L17.5 7.5 10 1.667 2.5 7.5l1.358 1.058L10 13.333zm0-9.558L14.783 7.5 10 11.225 5.217 7.5 10 3.775z"
          fill={props.color || '#706E6B'}
        />
      </Svg>
    </View>
  );
};

export default LayersOutlined;
