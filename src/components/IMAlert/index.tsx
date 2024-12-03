import React, { FunctionComponent } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import CheckCircleOutlined from '../../assets/svg/CheckCircleOutlined';
import Close from '../../assets/svg/Close';
import ErrorOutlineFilled from '../../assets/svg/ErrorOutlineFilled';
import InfoOutlined from '../../assets/svg/InfoOutlined';
import WarningAmberOutlined from '../../assets/svg/WarningAmberOutlined';
import IMButton from '../IMButton';
import IMIcon from '../IMIcon';
import { AlertType, AlertVariant } from './helper';
import useStyles from './styles';
import IMLabelPair from '../IMLabelPair';

interface IIIMAlertStyles {
  container: StyleProp<ViewStyle>;
}

interface IIMAlertActionProps {
  title: string;
  onClick?: () => void;
  onClose?: () => void;
}

interface IIMAlert {
  testId: string;
  content: string;
  title?: string;
  icon?: JSX.Element;
  actionProps?: IIMAlertActionProps;
  type?: AlertType;
  variant?: AlertVariant;
  styles?: IIIMAlertStyles;
}

const IMAlert: FunctionComponent<IIMAlert> = (props) => {
  const theme = useTheme();
  const alertType = props.type ?? 'error';
  const styles = useStyles(theme, alertType, props.variant ?? 'standard');

  const renderAlertIcon = () => {
    switch (alertType) {
      case 'error':
        return (
          <ErrorOutlineFilled
            style={styles.icon}
            {...(props.variant === 'filled' && {
              color: theme.Palette.background,
            })}
          />
        );
      case 'warning':
        return (
          <WarningAmberOutlined
            style={styles.icon}
            {...(props.variant === 'filled' && {
              color: theme.Palette.background,
            })}
          />
        );
      case 'info':
        return (
          <InfoOutlined
            style={styles.icon}
            color={props.variant === 'filled' ? theme.Palette.background : theme.Palette.IMInfo.main}
          />
        );
      case 'success':
        return (
          <CheckCircleOutlined
            style={styles.icon}
            {...(props.variant === 'filled' && {
              color: theme.Palette.background,
            })}
          />
        );
    }
  };

  const renderActionView = () =>
    !!props.actionProps && (
      <IMButton
        id={`${props.testId}ActionButton`}
        title={props.actionProps.title}
        variant="text"
        rightIcon={
          <IMIcon
            testId={`${props.testId}CloseIcon`}
            iconSvg={<Close style={[styles.closeIcon, styles[alertType]]} />}
            size="medium"
            color={styles[alertType].color}
          />
        }
        onClick={props.actionProps.onClick}
        styles={{
          container: styles.actionContainer,
          title: [styles.actionTitle, styles[alertType]],
        }}
      />
    );

  return (
    <View testID={props.testId} style={[styles.container, styles[alertType], props.styles?.container]}>
      {props.icon ?? renderAlertIcon()}
      <IMLabelPair
        primaryText={props.title}
        secondaryText={props.content}
        variant="vertical"
        styles={{
          container: styles.textContainer,
          primaryText: !!props.title ? styles.title : styles.titleHidden,
          secondaryText: styles.content,
        }}
      />
      {renderActionView()}
    </View>
  );
};

export default IMAlert;
