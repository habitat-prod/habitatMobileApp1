import React from 'react';
import { Image, ScrollView, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';
import MaintainanceLogCard from '../../../components/maintainanceLogCard';

const MaintainanceLogArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const maintainanceLogCardData = [
    {
      title: 'Clubhouse',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Gardens',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Stairs',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Elevators',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Pavements',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Waiting area',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Guest Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    },
    {
      title: 'Log',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => { },
    }
  ];

  return (
    <ScrollView>
      {maintainanceLogCardData.map((item, index) =>
        <MaintainanceLogCard
          key={index}
          title={item.title}
          imageUri={item.imageUri}
          onClick={item.onClick}
        />
      )}
    </ScrollView>
  );
};

export default MaintainanceLogArea;
