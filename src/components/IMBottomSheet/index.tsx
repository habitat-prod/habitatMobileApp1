import React, { useEffect, useRef } from 'react';
import { Animated, Modal, Pressable, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import Close from '../../assets/svg/Close';
import IMIcon from '../IMIcon';
import IMPageFooter, { IIMPageFooterProps } from '../IMPageFooter';
import useStyles from './styles';

interface IIMBottomSheetStyles {
  container?: ViewStyle;
  backdropContainer?: ViewStyle;
  titleStyle?: TextStyle;
  iconStyle?: ViewStyle;
  contentArea?: ViewStyle;
  titleContainer?: ViewStyle;
  footerContainer?: ViewStyle;
}

interface IIMBottomSheetProps {
  id: string;
  open: boolean;
  children: JSX.Element[] | JSX.Element;
  title?: string;
  numberOfLines?: number;
  footer?: IIMPageFooterProps;
  enableBackDropDismiss?: boolean;
  hideHeader?: boolean;
  onClose?: () => void;
  styles?: IIMBottomSheetStyles;
}

const renderingDuration = 500;

const IMBottomSheet: React.FC<IIMBottomSheetProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme, !!props.title);

  const bottomSheetAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.open) {
      Animated.timing(bottomSheetAnimation, {
        toValue: 1,
        duration: renderingDuration,
        useNativeDriver: true,
      }).start();
    } else if (!props.open) {
      Animated.timing(bottomSheetAnimation, {
        toValue: 0,
        duration: renderingDuration,
        useNativeDriver: true,
      }).start();
    }
  }, [props.open]);

  return (
    <Modal animationType="slide" transparent={true} visible={props.open} style={styles.modelBackDrop}>
      <Pressable
        onPress={props.enableBackDropDismiss ? props.onClose : undefined}
        style={[styles.defaultBackdropContainer, props.styles?.backdropContainer]}
      />
      <Animated.View
        testID={props.id}
        accessibilityLabel={props.id}
        style={[styles.defaultContainer, props.styles?.container]}
      >
        {!props.hideHeader && (
          <View style={[styles.defaultTitleContainer, props.styles?.titleContainer]}>
            {!!props.title && (
              <Text style={[styles.defaultTitleStyle, props.styles?.titleStyle]} numberOfLines={props.numberOfLines}>
                {props.title}
              </Text>
            )}
            {!!props.onClose && (
              <IMIcon
                testId={`${props.id}-close-icon`}
                iconSvg={<Close style={styles.defaultIconStyle} />}
                size="medium"
                onClick={props.onClose}
              />
            )}
          </View>
        )}
        <View style={[styles.defaultContentArea, props.styles?.contentArea]}>{props.children}</View>
        {props.footer && (
          <IMPageFooter
            {...props.footer}
            keyboardVerticalOffset={130}
            styles={{
              container: styles.defaultFooterContainer,
              ...props.footer.styles,
            }}
          />
        )}
      </Animated.View>
    </Modal>
  );
};

export default React.memo(IMBottomSheet);
