import React, { FunctionComponent } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import LottieView from 'lottie-react-native';
import { LoaderSize } from './helper';
import useStyles from './styles';

interface ILoaderProps {
  loaderText?: string;
  loaderSize?: LoaderSize;
  containerStyle?: StyleProp<ViewStyle>;
  loaderStyle?: StyleProp<ViewStyle>;
  isAbsolute?: boolean;
}

const IMLoader: FunctionComponent<ILoaderProps> = (props: ILoaderProps) => {
  const theme = useTheme();
  const styles = useStyles(theme, props.loaderSize ?? 'medium');

  return (
    <View style={[styles.container, props.isAbsolute && styles.loaderContainer, props.containerStyle]}>
      <LottieView
        style={[styles.lottieView, props.loaderStyle]}
        source={require('../../assets/animations/loader.json')}
        autoPlay
        loop
      />
      {props.loaderText && <Text style={styles.textStyles}>{props.loaderText}</Text>}
    </View>
  );
};

export default IMLoader;
