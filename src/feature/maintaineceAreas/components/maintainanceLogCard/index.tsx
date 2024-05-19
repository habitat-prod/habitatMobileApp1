import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import SimpleArrowRight from '../../../../assets/svg/SimpleArrowRight';

export interface IMaintainanceLogCard {
  title: string;
  imageUri: string;
  onClick: () => void;
  cardStyle?: StyleProp<ViewStyle>;
}

const MaintainanceLogCard: React.FC<IMaintainanceLogCard> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <TouchableOpacity onPress={props.onClick} style={[styles.cardContainerStyles, props.cardStyle]}>
      <Image source={{ uri: props.imageUri, }}
        style={styles.imageStyle}
      />
      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MaintainanceLogCard;
