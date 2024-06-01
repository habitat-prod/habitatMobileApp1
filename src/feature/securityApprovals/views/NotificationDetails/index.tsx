import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import NotificationDetailsCard from './notificationDetailsCard';
import useStyles from './styles';

const notificationDetailsList = [{
  title: 'Clubhouse',
  infoText: [
    { title: '12 people are there' },
    { title: 'Will leave on 26th April 2024' },
    { title: 'Allowed by you' },
  ],
  imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
},
{
  title: 'Cab',
  infoText: [
    { title: '2 people are there' },
    { title: 'Will leave immediately' },
  ],
  imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
},
{
  title: 'Maid',
  infoText: [
    { title: 'Maid of house 213, 216,219 and 220' },
  ],
  imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
}];

const NotificationDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}>Notification</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {notificationDetailsList.map((item, index) =>
          <NotificationDetailsCard
            key={index}
            title={item.title}
            infoText={item.infoText}
            imageUri={item.imageUrl}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationDetails;
