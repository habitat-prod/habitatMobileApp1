import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import HomeProfileCard from '../../components/HomeProfileCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { HBStackParamList } from '../../../../navigation/rootNavigation';
import { MaintainanceAreasScreens, NAVIGATION } from '../../../../constants/screens';
import BellOutlined from '../../../../assets/svgv1/BellOutlined';
import IMIcon from '../../../../components/IMIcon';
import MaintainanceAllAreas from '../../../../assets/svgv1/MaintainanceAllAreas';
import SecurityApproval from '../../../../assets/svgv1/SecurityApprovals';
import AccessYourParking from '../../../../assets/svgv1/AccessYourParking';
import ReserveCommonAreas from '../../../../assets/svgv1/ReserveCommonAreas';
import Hazard from '../../../../assets/svgv1/Hazard';
import Ambulance from '../../../../assets/svgv1/Ambulance';
import useStyles from './styles';

const HomeProfile: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('customer');
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const homeProfileCardData = [
    {
      title: 'Maintainence of all areas',
      imageUri: '../../../../assets/png/reserveCommonAreas.png',
      iconSvg: <MaintainanceAllAreas />,
      onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
        screen: MaintainanceAreasScreens.MaintainanceAreas,
        params: {},
      }),
    },
    {
      title: 'Security Approvals',
      iconSvg: <SecurityApproval />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.SecurityApprovalsStackNav, {
        screen: MaintainanceAreasScreens.SecurityApprovals,
        params: {},
      }),
    },
    {
      title: 'Access your parking',
      iconSvg: <AccessYourParking />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_brown.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav, {
        screen: MaintainanceAreasScreens.ParkingAreas,
        params: {},
      }),
    },
    {
      title: 'Reserve common areas',
      iconSvg: <ReserveCommonAreas />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav, {
        screen: MaintainanceAreasScreens.ReserveCommonAreas,
        params: {},
      }),
    },
    {
      title: 'Hazard',
      iconSvg: <Hazard />,
      imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/week5-triangle.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.HazardAreaStackNav, {
        screen: MaintainanceAreasScreens.HazardAreas,
        params: {},
      }),
    },
    {
      title: 'Ambulance',
      iconSvg: <Ambulance />,
      imageUri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_1_2.png',
      onClick: () => defaultNavigation.navigate(NAVIGATION.AmbulanceAreaStackNav, {
        screen: MaintainanceAreasScreens.AmbulanceArea,
        params: {},
      }),
    },
  ];


  const handleBellIcon = () => (
    defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
      screen: MaintainanceAreasScreens.NotificationDetails,
      params: {}
    }
    ));

  return (
    <SafeAreaView style={styles.container}>
      <IMIcon testId='Bell' iconSvg={<BellOutlined />} onClick={handleBellIcon} containerStyle={styles.subContainer} />
      <Text style={styles.textStyle}>Property Management Services</Text>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {homeProfileCardData.map((item, index) => (
          <HomeProfileCard
            key={index}
            iconSvg={item.iconSvg}
            title={item.title}
            imageUri={item.imageUri}
            onClick={item.onClick}
            cardStyle={styles.card}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeProfile;
