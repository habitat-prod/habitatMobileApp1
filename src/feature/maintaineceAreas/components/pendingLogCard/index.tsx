import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import IMIcon from '../../../../components/IMIcon';
import Close from '../../../../assets/svgv1/Close';
import Correct from '../../../../assets/svgv1/Correct';
import useStyles from './styles';

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
