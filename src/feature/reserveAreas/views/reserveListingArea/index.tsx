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
import useStyles from './styles';

const ReserveListingArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const reserveListingCardData = [
    {
      title: 'Table Tennis',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Table Tennis',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Tennis court',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Tennis court',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Basketball court',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Basketball court',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Badminton court',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Badminton court',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Fooseball table',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Fooseball table',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Swimming pool',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Swimming pool',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Pool table',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Pool table',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Party hall',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Party hall',
          imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        },
      }),
    },
    {
      title: 'Cricket pitch',
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveDetailsArea,
        params: {
          title: 'Cricket pitch',
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
            imageUri={item.imageUri}
            onClick={item.onClick}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReserveListingArea;
