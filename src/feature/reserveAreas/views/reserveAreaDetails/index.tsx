import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import ReserveAreaListingCard from '../../components/maintainanceListingCard';
import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import useStyles from './styles';

const maintainanceListingCardData = [
  {
    title: 'Table Tennis',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Tennis court',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Basketball court',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Badminton court',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Fooseball table',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Swimming pool',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Pool table',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Party hall',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  },
  {
    title: 'Cricket pitch',
    imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
    onClick: () => { },
  }
];


const ReserveAreaDetails: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}> Clubhouse Management </Text>
      </View>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {maintainanceListingCardData.map((item, index) => (
          <ReserveAreaListingCard
            key={index}
            title={item.title}
            imageUri={item.imageUri}
            onClick={item.onClick}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveAreaDetails;
