import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import SimpleArrowRight from '../../../../assets/svg/SimpleArrowRight';
import IMIcon from '../../../../components/HBIcon';
import Close from '../../../../assets/svg/Close';
import Correct from '../../../../assets/svg/Correct';

export interface IPendingLogCard {
  title: string;
  date: string;
  onReject: () => void;
  onAccept: () => void;
  cardStyle?: StyleProp<ViewStyle>;
}

const PendingLogCard: React.FC<IPendingLogCard> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <SafeAreaView style={[styles.containerStyle, props.cardStyle]}>
      <View style={styles.cardContainerStyles}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.iconContainer}>
          <IMIcon testId='Close' iconSvg={<Close />} onClick={props.onReject} />
          <IMIcon testId='Correct' iconSvg={<Correct />} onClick={props.onAccept} />
        </View>
      </View>
      <Text style={styles.dateTitle}>{props.date}</Text>
    </SafeAreaView>
  );
};

export default PendingLogCard;
