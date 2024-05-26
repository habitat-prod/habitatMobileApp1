import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import MaintainanceLogCard from '../../../components/maintainanceLogCard';
import { HBStackParamList } from '../../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../../constant/screens';
import useStyles from './styles';

const MaintainanceLogArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const maintainanceLogCardData = [
    {
      title: 'Clubhouse',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Clubhouse',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Parking',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
    },
    {
      title: 'Gardens',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Gardens',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Stairs',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Stairs',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
    },
    {
      title: 'Elevators',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Elevators',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
    },
    {
      title: 'Pavements',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Pavements',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
    },
    {
      title: 'Waiting area',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Waiting area',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
    },
    {
      title: 'Guest Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Guest Parking',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
    },
    {
      title: 'Log',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Log',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
        },
      }),
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
