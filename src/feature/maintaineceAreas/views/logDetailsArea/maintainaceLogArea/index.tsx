import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';

import MaintainanceLogCard from '../../../components/maintainanceLogCard';
import { HBStackParamList } from '../../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../../constants/screens';
import ClubhouseBig from '../../../../../assets/svgv1/ClubhouseBig';
import ParkingBig from '../../../../../assets/svgv1/ParkingBig';
import GardenBig from '../../../../../assets/svgv1/GardenBig';
import StairsBig from '../../../../../assets/svgv1/StairsBig';
import ElevatorBig from '../../../../../assets/svgv1/ElevatorBig';
import PavementBig from '../../../../../assets/svgv1/PavementBig';
import WaitingAreaBig from '../../../../../assets/svgv1/WaitingAreaBig';
import GuestParkingBig from '../../../../../assets/svgv1/GuestParkingBig';
import ClubhouseSmall from '../../../../../assets/svgv1/ClubhouseSmall';
import ParkingSmall from '../../../../../assets/svgv1/ParkingSmall';
import StairSmall from '../../../../../assets/svgv1/StairSmall';
import ElevatorSmall from '../../../../../assets/svgv1/ElevatorSmall';
import PavementSmall from '../../../../../assets/svgv1/PavementSmall';
import WaitingAreaSmall from '../../../../../assets/svgv1/WaitingAreaSmall';
import GardenSmall from '../../../../../assets/svgv1/GradenSmall';
import useStyles from './styles';

const MaintainanceLogArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const maintainanceLogCardData = [
    {
      title: 'Clubhouse',
      iconSvg: <ClubhouseSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Clubhouse',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <ClubhouseBig />,
        },
      }),
    },
    {
      title: 'Parking',
      iconSvg: <ParkingSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Parking',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
          iconSvg: <ParkingBig />,
        },
      }),
    },
    {
      title: 'Gardens',
      iconSvg: <GardenSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Gardens',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <GardenBig />,
        },
      }),
    },
    {
      title: 'Stairs',
      iconSvg: <StairSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Stairs',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
          iconSvg: <StairsBig />,
        },
      }),
    },
    {
      title: 'Elevators',
      iconSvg: <ElevatorSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Elevators',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
          iconSvg: <ElevatorBig />,
        },
      }),
    },
    {
      title: 'Pavements',
      iconSvg: <PavementSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Pavements',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
          iconSvg: <PavementBig />,
        },
      }),
    },
    {
      title: 'Waiting area',
      iconSvg: <WaitingAreaSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Waiting area',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
          iconSvg: <WaitingAreaBig />,
        },
      }),
    },
    {
      title: 'Guest Parking',
      iconSvg: <ParkingSmall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceCardDetails,
        params: {
          title: 'Guest Parking',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
          iconSvg: <GuestParkingBig />,
        },
      }),
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
      {maintainanceLogCardData.map((item, index) =>
        <MaintainanceLogCard
          key={index}
          title={item.title}
          iconSvg={item.iconSvg}
          imageUri={item.imageUri}
          onClick={item.onClick}
        />
      )}
    </ScrollView>
  );
};

export default MaintainanceLogArea;
