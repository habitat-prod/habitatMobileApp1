import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import IMIcon from '../../../../components/IMIcon';
import InfoOutlined from '../../../../assets/svg/InfoOutlined';
import IMButton from '../../../../components/IMButton';
import useStyles from './styles';

interface INotificationDetailsCardProps {
  title: string;
  infoText: Record<string, any>;
  imageUri: string;
}

const NotificationDetailsCard: React.FC<INotificationDetailsCardProps> = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const renderInfoText = (title: string, index: number) => (
    <View style={styles.infoTextStyle} key={index}>
      <IMIcon testId='Correct' iconSvg={<InfoOutlined />} disabled color={theme.Palette.text.primary} />
      <Text style={styles.informationTextStyle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageTextContainer}>
        <Image
          source={{ uri: props.imageUri }}
          style={styles.imageContainer}
        />
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
      {props.infoText.map((item: any, index: number) => renderInfoText(item.title, index))}
      <View style={styles.btnContainer}>
        <IMButton id='Deny' variant='outlined' title='Deny' styles={{ container: styles.denyBtnContainer, title: styles.denyTitle }} />
        <IMButton id='Approve' variant='contained' title='Approve' styles={{ container: styles.allowBtnContainer, title: styles.allowTitle }} />
      </View>
    </View>
  );
};

export default NotificationDetailsCard;
