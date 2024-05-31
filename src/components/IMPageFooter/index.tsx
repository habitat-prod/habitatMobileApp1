import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMButton from '../IMButton';
import { PrimaryBtnVariant, SecondaryBtnVariant } from './helper';
import useStyles from './styles';

interface IIMPageFooterStyles {
  container?: ViewStyle;
  titleStyle?: TextStyle;
  primaryBtnContainer?: ViewStyle;
  secondaryBtnContainer?: ViewStyle;
  subTitleContainer?: ViewStyle;
  subTitleStyle?: TextStyle;
}

export interface IIMPageFooterProps {
  id: string;
  primaryBtnDisabled?: boolean;
  primaryBtnId?: string;
  primaryBtnTitle: string;
  primaryBtnAction: (data?: any) => void;
  primaryBtnVariant: PrimaryBtnVariant;
  primaryBtnRightIcon?: JSX.Element;
  secondaryVariant?: SecondaryBtnVariant;
  title?: string;
  subTitle?: string;
  secondaryBtnId?: string;
  secondaryButtonTitle?: string;
  secondaryBtnAction?: (data?: any) => void;
  secondaryBtnRightIcon?: JSX.Element;
  secondaryBtnDisabled?: boolean;
  tertiaryBtnId?: string;
  tertiaryBtnAction?: (data?: any) => void;
  keyboardVerticalOffset?: number;
  styles?: IIMPageFooterStyles;
}

const IMPageFooter: FC<IIMPageFooterProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.primaryBtnVariant);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={props.keyboardVerticalOffset ?? 0}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <View testID={props.id} accessibilityLabel={props.id} style={[styles.container, props.styles?.container]}>
        <IMButton
          id={props.primaryBtnId ?? `${props.id}_primaryBtn`}
          variant="contained"
          rightIcon={props.primaryBtnRightIcon}
          disabled={props.primaryBtnDisabled}
          title={props.primaryBtnTitle}
          onClick={props.primaryBtnAction}
          styles={{
            container: [styles.defaultPrimaryBtnContainer, props.styles?.primaryBtnContainer],
            title: styles.defaultPrimaryBtnLabel,
          }}
        />
        {props.primaryBtnVariant === 'tertiary' && (
          <>
            {props.secondaryVariant === 'button' && (
              <IMButton
                id={props.secondaryBtnId ?? `${props.id}_secondaryBtn`}
                variant="text"
                title={props.secondaryButtonTitle}
                onClick={props.secondaryBtnAction}
                rightIcon={props.secondaryBtnRightIcon}
                disabled={props.secondaryBtnDisabled}
                styles={{
                  container: [styles.defaultSecondaryBtnContainer, props.styles?.secondaryBtnContainer],
                  title: styles.defaultSecondaryBtnLabel,
                }}
              />
            )}
            {props.secondaryVariant === 'title' && (
              <View style={[styles.defaultSecondaryTitleContainer]}>
                <Text style={[styles.defaultSecondaryTitle, props.styles?.titleStyle]}>{props.title ?? ''}</Text>
                <IMButton
                  id={props.tertiaryBtnId ?? `${props.id}_tertiaryBtn`}
                  variant="text"
                  title={props.subTitle ?? ''}
                  disabled={!props.tertiaryBtnAction}
                  onClick={props.tertiaryBtnAction}
                  styles={{
                    container: [styles.defaultSubTitleContainer, props.styles?.subTitleContainer],
                    title: [styles.defaultSecondarySubTitle, props.styles?.subTitleStyle],
                  }}
                />
              </View>
            )}
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default React.memo(IMPageFooter);
