import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import MaintainanceListingCard from '../../components/maintainanceListingCard';

const MaintainaceDetailsArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const maintainanceListingCardData = [
    {
      title: 'Clubhouse',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Gardens',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Stairs',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Elevators',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Pavements',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Waiting area',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Guest Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    },
    {
      title: 'Log',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => {},
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> All Spaces </Text>
      <View style={styles.cardsContainer}>
        {maintainanceListingCardData.map((item, index) => (
          <MaintainanceListingCard
            key={index}
            title={item.title}
            imageUri={item.imageUri}
            onClick={item.onClick}
          />
        ))}
      </View>
    </View>
  );
};

export default MaintainaceDetailsArea;
