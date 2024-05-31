import React from 'react';
import { View, Text, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import IMButton from '../IMButton';
import Lost from '../../assets/Illustration/Lost';
import IMLabelPair from '../IMLabelPair';
import useStyles from './styles';

interface ClassType {
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  errorMessageStyle?: StyleProp<TextStyle>;
  errorDescriptionStyle?: StyleProp<TextStyle>;
  imageContainerStyle?: StyleProp<ViewStyle>;
  errorBoxContainerStyle?: StyleProp<ViewStyle>;
}

interface IMErrorCardButtonProps {
  id?: string;
  title?: string;
  leftIcon?: JSX.Element;
  onButtonPress: () => void;
}

interface IMErrorCardProps {
  id: string;
  extended?: boolean;
  iconSvg?: JSX.Element;
  errorMessageText?: string;
  errorDescription?: string;
  buttonProps?: IMErrorCardButtonProps;
  styles?: ClassType;
}

const IMErrorCard: React.FunctionComponent<IMErrorCardProps> = (props: IMErrorCardProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('common');

  const renderErrorBox = () => (
    <View style={[styles.extendedErrorBoxContainer, props.styles?.errorBoxContainerStyle]}>
      {props.iconSvg ?? <Lost style={[styles.imageContainer, props.styles?.imageContainerStyle]} />}
      <IMLabelPair
        variant="vertical"
        primaryText={props.errorMessageText}
        secondaryText={props.errorDescription}
        styles={{
          container: styles.errorStyle,
          primaryText: [styles.errorMessageStyle, props.styles?.errorMessageStyle],
          secondaryText: [styles.errorDescriptionStyle, props.styles?.errorDescriptionStyle],
        }}
      />
      {!!props.buttonProps && (
        <IMButton
          id={props.buttonProps?.id || `IMErrorCard-${props.id}`}
          variant="contained"
          styles={{
            container: [styles.buttonStyle, props.styles?.buttonStyle],
            title: [styles.titleStyle, props.styles?.titleStyle],
          }}
          title={props.buttonProps?.title ?? t('common:retry')}
          leftIcon={props.buttonProps?.leftIcon}
          onClick={props.buttonProps?.onButtonPress}
        />
      )}
    </View>
  );

  const renderCardError = () => (
    <View style={[styles.errorBoxContainer, props.styles?.errorBoxContainerStyle]}>
      <Text style={[styles.cardErrorMessageStyle, props.styles?.errorMessageStyle]}>{props.errorMessageText}</Text>
      {!!props.buttonProps && (
        <IMButton
          id={props.buttonProps?.id || `IMErrorCard-${props.id}`}
          variant="text"
          styles={{
            container: props.styles?.buttonStyle,
            title: props.styles?.titleStyle,
          }}
          title={props.buttonProps?.title ?? t('common:retry')}
          leftIcon={props.buttonProps?.leftIcon}
          onClick={props.buttonProps?.onButtonPress}
        />
      )}
    </View>
  );

  return <View>{props.extended ? renderErrorBox() : renderCardError()}</View>;
};

export default IMErrorCard;
