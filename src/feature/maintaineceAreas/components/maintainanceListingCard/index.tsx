import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import SimpleArrowRight from '../../../../assets/svgv1/SimpleArrowRight';
import IMIcon, { IconSvgProps } from '../../../../components/IMIcon';

export interface IMaintainanceListingCard {
  title: string;
  imageUri: string;
  iconSvg: ReactElement<IconSvgProps>;
  onClick: () => void;
  cardStyle?: StyleProp<ViewStyle>;
}

const MaintainanceListingCard: React.FC<IMaintainanceListingCard> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  console.log('image', props.imageUri);

  return (
    <TouchableOpacity onPress={props.onClick} style={[styles.cardContainerStyles, props.cardStyle]}>
      <View style={styles.subContainer}>
        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
        <SimpleArrowRight />
      </View>
      {/* <Image source={require('../../../../assets/png/reserveCommonAreas.png')}
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

export default MaintainanceListingCard;
