import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ReserveAreaListingCard from '../../components/reserveAreaListingCard';
import IMIcon from '../../../../components/IMIcon';
import ArrowBackFilled from '../../../../assets/svg/ArrowBackFilled';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import TableTennis from '../../../../assets/svgv1/TableTennis';
import TennisCourt from '../../../../assets/svgv1/TennisCourt';
import CricketPitch from '../../../../assets/svgv1/CricketPitch';
import PartyHall from '../../../../assets/svgv1/PartyHall';
import PoolTable from '../../../../assets/svgv1/PoolTable';
import SwimmingPool from '../../../../assets/svgv1/SwimmingPool';
import FooseballTable from '../../../../assets/svgv1/FooseballTable';
import BadmintonCourt from '../../../../assets/svgv1/BadmintonCourt';
import BasketballCourt from '../../../../assets/svgv1/BasketballCourt';
import TableTennisBig from '../../../../assets/svgv1/TableTennisBig';
import TennisCourtBig from '../../../../assets/svgv1/TennisCourtBig';
import BasketballCourtBig from '../../../../assets/svgv1/BasketballCourtBig';
import BadmintonCourtBig from '../../../../assets/svgv1/BadmintonCourtBig';
import FooseballTableBig from '../../../../assets/svgv1/FooseballBig';
import PoolTableBig from '../../../../assets/svgv1/PoolTableBig';
import PartyHallBig from '../../../../assets/svgv1/PartyhallBig';
import CricketPitchBig from '../../../../assets/svgv1/CricketPitchBig';
import useStyles from './styles';

const ReserveListingArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const reserveListingCardData = [
    {
      title: 'Table Tennis',
      iconSvg: <TableTennis />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Table Tennis',
          iconSvg: <TableTennisBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Tennis court',
      iconSvg: <TennisCourt />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Tennis court',
          iconSvg: <TennisCourtBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Basketball court',
      iconSvg: <BasketballCourt />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Basketball court',
          iconSvg: <BasketballCourtBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Badminton court',
      iconSvg: <BadmintonCourt />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Badminton court',
          iconSvg: <BadmintonCourtBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Fooseball table',
      iconSvg: <FooseballTable />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Fooseball table',
          iconSvg: <FooseballTableBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Swimming pool',
      iconSvg: <SwimmingPool />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Swimming pool',
          iconSvg: <SwimmingPool />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Pool table',
      iconSvg: <PoolTable />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Pool table',
          iconSvg: <PoolTableBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Party hall',
      iconSvg: <PartyHall />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Party hall',
          iconSvg: <PartyHallBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Cricket pitch',
      iconSvg: <CricketPitch />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Cricket pitch',
          iconSvg: <CricketPitchBig />,
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    }
  ];


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <IMIcon testId='ArrowBackFilled' iconSvg={<ArrowBackFilled />} onClick={defaultNavigation.goBack} />
        <Text style={styles.textStyle}> Clubhouse Management </Text>
      </View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {reserveListingCardData.map((item, index) => (
          <ReserveAreaListingCard
            key={index}
            title={item.title}
            iconSvg={item.iconSvg}
            imageUri={item.imageUri}
            onClick={item.onClick}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveListingArea;
