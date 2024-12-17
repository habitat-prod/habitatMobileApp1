import React, { FC } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import { LabelPairVariant } from './helper';
import useStyles from './styles';

interface IIMLabelPairStyles {
  container?: StyleProp<ViewStyle>;
  primaryText?: StyleProp<TextStyle>;
  secondaryText?: StyleProp<TextStyle>;
}

interface IIMLabelPair {
  primaryText: React.ReactNode;
  secondaryText: React.ReactNode;
  secondaryTextNumberOfLines?: number;
  variant?: LabelPairVariant;
  styles?: IIMLabelPairStyles;
  id?: string;
}

const IMLabelPair: FC<IIMLabelPair> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.variant ?? 'horizontal');

  const id = props.id || `IMLabelPair${Math.round(Math.random() * 10000)}`;

  return (
    <View style={[styles.defaultContainer, props.styles?.container]}>
      {!!props.primaryText && (
        <Text
          testID={`${id}-primary`}
          accessibilityLabel={`${id}-primary`}
          style={[styles.defaultPrimaryText, props.styles?.primaryText]}
        >
          {props.primaryText}
        </Text>
      )}
      {!!props.secondaryText && (
        <Text
          testID={`${id}-secondary`}
          accessibilityLabel={`${id}-secondary`}
          style={[styles.defaultSecondaryText, props.styles?.secondaryText]}
          numberOfLines={props.secondaryTextNumberOfLines}
        >
          {props.secondaryText}
        </Text>
      )}
    </View>
  );
};

export default React.memo(IMLabelPair);
