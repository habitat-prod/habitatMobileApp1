import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMBadge from '..';
import { QuickFilterBadgeStatus } from '../helper';
import useStyles from './styles';

interface IMQuickFilterBadgeStyleProps {
  container?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export interface IMQuickFilterBadgeProps {
  name: string;
  title: string;
  status: QuickFilterBadgeStatus;
  onClick: (name: string) => void;
  testId?: string;
  styles?: IMQuickFilterBadgeStyleProps;
}

const IMQuickFilterBadge: React.FC<IMQuickFilterBadgeProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.status);
  const testID = props.testId || 'quick-filter-card';

  const handleClick = () => props.onClick(props.name);

  return (
    <IMBadge
      id={testID}
      label={props.title}
      variant="outlined"
      onClick={handleClick}
      styles={{
        container: [styles.quickFilterCardContainer, props.styles?.container],
        titleStyle: [styles.textStyle, props.styles?.titleStyle],
      }}
    />
  );
};

export default IMQuickFilterBadge;
