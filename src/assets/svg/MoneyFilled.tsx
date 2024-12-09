import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IMoneyFilled {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const MoneyFilled: React.FC<IMoneyFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path d="M4.1665 6.66667H5.83317V13.3333H4.1665V6.66667ZM9.99984 6.66667H7.49984C7.0415 6.66667 6.6665 7.04167 6.6665 7.5V12.5C6.6665 12.9583 7.0415 13.3333 7.49984 13.3333H9.99984C10.4582 13.3333 10.8332 12.9583 10.8332 12.5V7.5C10.8332 7.04167 10.4582 6.66667 9.99984 6.66667ZM9.1665 11.6667H8.33317V8.33334H9.1665V11.6667ZM14.9998 6.66667H12.4998C12.0415 6.66667 11.6665 7.04167 11.6665 7.5V12.5C11.6665 12.9583 12.0415 13.3333 12.4998 13.3333H14.9998C15.4582 13.3333 15.8332 12.9583 15.8332 12.5V7.5C15.8332 7.04167 15.4582 6.66667 14.9998 6.66667ZM14.1665 11.6667H13.3332V8.33334H14.1665V11.6667Z" fill={props.color ?? "#757575"} />
        <Path d="M1.6665 3.33334V16.6667H18.3332V3.33334H1.6665ZM3.33317 15V5H16.6665V15H3.33317Z" fill={props.color ?? "#757575"} />
      </Svg>
    </View>
  );
};

export default MoneyFilled;
