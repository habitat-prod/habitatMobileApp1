import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IApartment {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const Apartment: React.FC<IApartment> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="100%" height="100%" viewBox="0 0 18 18" fill="none">
        <Path
          d="M0 18V4h4V0h10v8h4v10h-8v-4H8v4H0zm2-2h2v-2H2v2zm0-4h2v-2H2v2zm0-4h2V6H2v2zm4 4h2v-2H6v2zm0-4h2V6H6v2zm0-4h2V2H6v2zm4 8h2v-2h-2v2zm0-4h2V6h-2v2zm0-4h2V2h-2v2zm4 12h2v-2h-2v2zm0-4h2v-2h-2v2z"
          fill={props.color ?? "#00766C"}
        />
      </Svg>
    </View>
  );
};

export default Apartment;
