import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import ArrowRight from '../../../../assets/svgv1/ArrowRight';
import IMIcon, { IconSvgProps } from '../../../../components/IMIcon';
import useStyles from './styles';

export interface IHomeProfileCard {
  title: string;
  imageUri: string;
  onClick: () => void;
  iconSvg: ReactElement<IconSvgProps>;
  cardStyle?: StyleProp<ViewStyle>;
}


const HomeProfileCard: React.FC<IHomeProfileCard> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('customer');

  console.log('imagehome', props.imageUri);

  return (
    <TouchableOpacity onPress={props.onClick} style={[styles.cardContainerStyles, props.cardStyle]}>
      <View style={styles.subContainer}>
        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        <ArrowRight />
      </View>
      {/* <Image source={{ uri: props.imageUri }} TODO: Will update this later and remove IMIcon
        style={styles.imageStyle}
      /> */}
      <IMIcon
        testId={''}
        disabled
        iconSvg={props.iconSvg}
        containerStyle={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

export default HomeProfileCard;
