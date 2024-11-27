import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaintainanceListingCard from '../../components/maintainanceListingCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import Clubhouse from '../../../../assets/svgv1/Clubhouse';
import Garden from '../../../../assets/svgv1/Garden';
import Stairs from '../../../../assets/svgv1/Stairs';
import Elevator from '../../../../assets/svgv1/Elevator';
import Pavement from '../../../../assets/svgv1/Pavement';
import WaitingArea from '../../../../assets/svgv1/WaitingArea';
import Log from '../../../../assets/svgv1/Log';
import Parking from '../../../../assets/svgv1/Parking';
import GuestParking from '../../../../assets/svgv1/GuestParking';
import useStyles from './styles';
import ClubhouseBig from '../../../../assets/svgv1/ClubhouseBig';
import ParkingBig from '../../../../assets/svgv1/ParkingBig';
import GardenBig from '../../../../assets/svgv1/GardenBig';
import StairsBig from '../../../../assets/svgv1/StairsBig';
import ElevatorBig from '../../../../assets/svgv1/ElevatorBig';
import PavementBig from '../../../../assets/svgv1/PavementBig';
import WaitingAreaBig from '../../../../assets/svgv1/WaitingAreaBig';
import GuestParkingBig from '../../../../assets/svgv1/GuestParkingBig';

const MaintainaceDetailsArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const maintainanceListingCardData = [
    {
      title: 'Clubhouse',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      iconSvg: <Clubhouse />,
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Clubhouse',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <ClubhouseBig />
        },
      }),
    },
    {
      title: 'Parking',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      iconSvg: <Parking />,
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Parking',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <ParkingBig />
        },
      }),
    },
    {
      title: 'Gardens',
      iconSvg: <Garden />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Gardens',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <GardenBig />,
        },
      }),
    },
    {
      title: 'Stairs',
      iconSvg: <Stairs />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Stairs',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <StairsBig />
        },
      }),
    },
    {
      title: 'Elevators',
      iconSvg: <Elevator />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Elevators',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <ElevatorBig />
        },
      }),
    },
    {
      title: 'Pavements',
      iconSvg: <Pavement />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Pavements',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <PavementBig />
        },
      }),
    },
    {
      title: 'Waiting area',
      iconSvg: <WaitingArea />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Waiting area',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <WaitingAreaBig />
        },
      }),
    },
    {
      title: 'Guest Parking',
      iconSvg: <GuestParking />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceListDetails,
        params: {
          title: 'Guest Parking',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
          iconSvg: <GuestParkingBig />
        },
      }),
    },
    {
      title: 'Log',
      iconSvg: <Log />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.LogDetailsArea,
        params: {},
      }),
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}> All Spaces </Text>
      </View>
      <View style={styles.cardsContainer}>
        {maintainanceListingCardData.map((item, index) => (
          <MaintainanceListingCard
            key={index}
            title={item.title}
            iconSvg={item.iconSvg}
            imageUri={item.imageUri}
            onClick={item.onClick}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MaintainaceDetailsArea;
