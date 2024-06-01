import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import SimpleArrowRight from '../../../../assets/svgv1/SimpleArrowRight';

export interface IReserveAreaListingCard{
  title: string;
  imageUri: string;
  onClick: () => void;
  cardStyle?: StyleProp<ViewStyle>;
}

const ReserveAreaListingCard: React.FC<IReserveAreaListingCard> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  console.log('images', props.imageUri);

  return (
    <TouchableOpacity onPress={props.onClick} style={[styles.cardContainerStyles, props.cardStyle]}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <SimpleArrowRight />
      </View>
      <Image source={require('../../../../assets/png/reserveCommonAreas.png')}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

export default ReserveAreaListingCard;
