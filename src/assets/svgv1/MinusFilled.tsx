import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IMinusFilledProps {
    style?: ViewStyle;
    color?: string;
}

const MinusFilled: React.FunctionComponent<IMinusFilledProps> = (props) => (
    <View style={props.style}>
        <Svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
            <Path d="M0 6H14V8H0V6Z" fill={props.color ?? '#ffffff'} />
        </Svg>
    </View>
);

export default MinusFilled;
