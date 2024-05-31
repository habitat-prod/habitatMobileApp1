import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import Close from '../../../../assets/svgv1/Close';
import IMIcon from '../../../../components/IMIcon';
import Correct from '../../../../assets/svgv1/Correct';
import useStyles from './styles';

interface ISecurityApprovalListingCardProps {
  title: string;
  imageUri: string;
  onReject: () => void;
  onApprove: () => void;
  selectedTab: string;
}

const SecurityApprovalListingCard: React.FC<ISecurityApprovalListingCardProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.imageUri }}
        style={styles.imageContainer}
      />
      <Text style={styles.textStyle}>{props.title}</Text>
      {props.selectedTab === 'Pending' && (
        <View style={styles.iconContainer}>
          <IMIcon testId='Close' iconSvg={<Close />} onClick={props.onReject} />
          <IMIcon testId='Correct' iconSvg={<Correct />} onClick={props.onApprove} />
        </View>
      )}
    </View>
  );
};

export default SecurityApprovalListingCard;
