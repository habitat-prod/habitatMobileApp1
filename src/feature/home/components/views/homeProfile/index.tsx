import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { View, Text, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import HomeProfileCard from '../../HomeProfileCard';
import useStyles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { HBStackParamList } from '../../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../../constant/screens';

const HomeProfile: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('customer');
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const homeProfileCardData = [
    {
      title: 'Maintainence of all areas',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceAreas,
        params: {},
      }),
    },
    {
      title: 'Security Approvals',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.SecurityApprovalsStackNav, {
        screen: MaintainanceAreasScreens.SecurityApprovals,
        params: {},
      }),
    },
    {
      title: 'Access your parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_brown.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav, {
        screen: MaintainanceAreasScreens.ParkingAreas,
        params: {},
      }),
    },
    {
      title: 'Reserve common areas',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveCommonAreas,
        params: {},
      }),
    },
    {
      title: 'Hazard',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.HazardAreaStackNav, {
        screen: MaintainanceAreasScreens.HazardAreas,
        params: {},
      }),
    },
    {
      title: 'Ambulance',
      imageUri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_1_2.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.AmbulanceAreaStackNav, {
        screen: MaintainanceAreasScreens.AmbulanceArea,
        params: {},
      }),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Property Management Services</Text>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {homeProfileCardData.map((item, index) => (
          <HomeProfileCard
            key={index}
            title={item.title}
            imageUri={item.imageUri}
            onClick={item.onClick}
            cardStyle={styles.card}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeProfile;
