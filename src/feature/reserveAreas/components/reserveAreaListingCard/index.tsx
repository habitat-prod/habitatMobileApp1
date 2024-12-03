import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';

import SimpleArrowRight from '../../../../assets/svgv1/SimpleArrowRight';
import IMIcon, { IconSvgProps } from '../../../../components/IMIcon';
import useStyles from './styles';

export interface IReserveAreaListingCard{
  title: string;
  imageUri: string;
  onClick: () => void;
  iconSvg: ReactElement<IconSvgProps>;
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
      {/* <Image source={require('../../../../assets/png/basketball.png')}
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

export default ReserveAreaListingCard;
