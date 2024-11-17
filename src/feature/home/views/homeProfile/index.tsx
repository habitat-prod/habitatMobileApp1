import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
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
import { Toaster } from '../../../../constants/common';
import useStyles from './styles';
import CustomBottom from '../../../auth/views/dialoug/CustomBottom';
import axios from '../../../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTypedSelector } from '../../../../redux/store/configureStore';

const HomeProfile: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const route = useRoute<RouteProp<HBStackParamList, 'HomeProfile'>>(); // Specify the type here

  const theme = useTheme();
  const styles = useStyles(theme);
  const { t } = useTranslation('customer');
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const [data, setData] = useState([]);
  const { flatDetailsList } = route.params || {};

  useEffect(() => {
    console.log(`inside homeProfile flatDetailsList is: ${flatDetailsList}`)
    if (route.params?.showModal) {
      setShowDialog(true);
    }
  }, [route.params?.showModal])

  const verifyOTPScreen = useTypedSelector((state) =>(
    state.otpVerification // Default empty object to avoid undefined error
 )
);
console.log(`inside verifyOTPScreen: ${JSON.stringify(verifyOTPScreen)}`)

  // const getApiData = async () => {
  //   const societyId = Number(await AsyncStorage.getItem('societyId'));
  //   const url = `https://backend-dev.habitatautomations.com/pmsSocietyMapping/bySociety?societyId=${societyId}`;
  //   let result = await axios.get(url);
  //   result = result.json;
  //   setData(data);
  // }

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
      onClick: () => Toaster('Don`t Worry, Coming soon...'),
    },
    {
      title: 'Ambulance',
      iconSvg: <Ambulance />,
      imageUri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_1_2.png',
      onClick: () => Toaster('Ambulance is on the way, please calm down'),
    },
  ];

  // useEffect(() => {
  //   // Show the dialog if the route has the showModal param set to true
  //   if (route.params?.showModal) {
  //     setShowDialog(true);
  //   }
  // }, [route.params?.showModal]);


  const handleBellIcon = () => (
    defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
      screen: MaintainanceAreasScreens.NotificationDetails,
      params: {}
    }
    ));

  return (
    <SafeAreaView style={styles.container}>
      {/* {showDialog && <CustomBottom visible={showDialog} onClose={() => setShowDialog(false)} />} */}
      {showDialog && (
        <CustomBottom
          visible={showDialog}
          onClose={() => setShowDialog(false)}
          flatDetailsList={flatDetailsList} // Pass the data here
        />
      )}
      <IMIcon testId='Bell' iconSvg={<BellOutlined />} onClick={handleBellIcon} containerStyle={styles.subContainer} />
      <Text style={styles.textStyle}>Property Management Services</Text>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardsContainer}>
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
