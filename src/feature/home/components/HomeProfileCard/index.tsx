import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import ArrowRight from '../../../../assets/svgv1/ArrowRight';
import useStyles from './styles';

export interface IHomeProfileCard {
  title: string;
  imageUri: string;
  onClick: () => void;
  cardStyle?: StyleProp<ViewStyle>;
}


const HomeProfileCard: React.FC<IHomeProfileCard> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('customer');

  return (
    <TouchableOpacity onPress={props.onClick} style={[styles.cardContainerStyles, props.cardStyle]}>
      <View style={styles.subContainer}>
        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        <ArrowRight />
      </View>
      <Image source={{ uri: props.imageUri, }}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

export default HomeProfileCard;
