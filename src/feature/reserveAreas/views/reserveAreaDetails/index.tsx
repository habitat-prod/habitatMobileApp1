import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import ReserveAreaListingCard from '../../components/maintainanceListingCard';

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

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Clubhouse Management </Text>
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
    </View>
  );
};

export default ReserveAreaDetails;
