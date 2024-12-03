import React, { FunctionComponent } from 'react';
import { View, ViewStyle } from 'react-native';

import { DividerVariant } from './helper';
import { useStyles } from './styles';
import { useTheme } from 'react-native-paper';

interface IDivider {
  type?: DividerVariant;
  styles?: ViewStyle;
}

const IMDivider: FunctionComponent<IDivider> = (props) => {
    const theme = useTheme();
    const styles = useStyles(theme, props.type ?? 'dashed');

  return <View style={[ styles.divider, props.styles ]} />;
};

export default IMDivider;
