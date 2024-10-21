import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, ScrollView, Image, StyleSheet, TextInput, View } from 'react-native';
import { Modal, useTheme } from 'react-native-paper';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeProfile: React.FC = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [visible, setVisible] = useState(false);
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
      onClick: () => Toaster('Don`t Worry, Coming soon...'),
    },
    {
      title: 'Ambulance',
      iconSvg: <Ambulance />,
      imageUri: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_1_2.png',
      onClick: () => Toaster('Ambulance is on the way, please calm down'),
    },
  ];

  const handleSelectHome = async () => {
    await AsyncStorage.setItem('isFirstTimeUser', 'false');
    setIsFirstTime(false);
    setVisible(false); // Close the modal after selection
  };

  useEffect(() => {
    const checkFirstTimeUser = async () => {
      const firstTime = await AsyncStorage.getItem('isFirstTimeUser');
      if (firstTime) {
        setIsFirstTime(true);
        setVisible(true); // Show bottom sheet if user is entering first time
      }
    };
    checkFirstTimeUser();
  }, []);

  const handleBellIcon = () => (
    defaultNavigation.navigate(NAVIGATION.HomeProfileNav, {
      screen: MaintainanceAreasScreens.NotificationDetails,
      params: {}
    }
    ));

  return (
    <>
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Property Management Services</Text>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardsContainer}>
        {homeProfileCardData.map((item, index) => (
          <HomeProfileCard
            key={index}
            iconSvg={item.iconSvg}
            title={item.title}
            onClick={item.onClick}
            cardStyle={styles.card}
          />
        ))}
      </ScrollView>
      
    </SafeAreaView>

      {/* Bottom Sheet for First-Time Users */}

      {isFirstTime && (
        <Modal visible={visible} style={{bottom:0, position:'absolute', paddingTop:220, marginHorizontal:8,}} onDismiss={() => {}}>
        <View style={{ 
          // position:'absolute',
            backgroundColor:'#fff',
            width:'100%',
            padding:5,
          //   paddingBottom:15,
          //   marginBottom:0,
          //   bottom:0,
            borderTopStartRadius:21,
            borderTopEndRadius:21,
          //   paddingHorizontal:12
            }}>
               <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', alignContent:'center',}}>
                <Text style={styling.txtTitle}>
                    Select a saved address
                    </Text>
                    <Text style={styling.txtSeeAll}> See all</Text>
                </View>

            {/* Address Options */}
            <TouchableOpacity style={styling.addressOption} onPress={handleSelectHome}>
            <View style={{flexDirection:'row', marginTop:5, padding:5}}>
                    <Image source={require('../../../../assets/png/habitaticon.png')} style={styling.iconStyle} />
                    <View style={{flexDirection:'column'}}>
                    <Text style={styling.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styling.addressOption} onPress={handleSelectHome}>
              <View style={{flexDirection:'row', marginTop:5, padding:5}}>
                    <Image source={require('../../../../assets/png/habitaticon.png')} style={styling.iconStyle} />
                    <View style={{flexDirection:'column'}}>
                    <Text style={styling.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styling.addressOption} onPress={handleSelectHome}>
            <View style={{flexDirection:'row', marginTop:5, padding:5}}>
                    <Image source={require('../../../../assets/png/habitaticon.png')} style={styling.iconStyle} />
                    <View style={{flexDirection:'column'}}>
                    <Text style={styling.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styling.addressOption} onPress={handleSelectHome}>
            <View style={{flexDirection:'row', marginTop:5, padding:5}}>
                    <Image source={require('../../../../assets/png/habitaticon.png')} style={styling.iconStyle} />
                    <View style={{flexDirection:'column'}}>
                    <Text style={styling.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styling.manualInputContainer}>
              <Image source={require('../../../../assets/png/icon_search.png')} style={styling.iconStyle} />
              <TextInput style={styling.textInput} placeholder='Select Location Manually' />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  cardsContainer: {
    paddingBottom: 20,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 9,
    marginBottom: 0,
  },
  txtTitle: {
    fontSize:22,
    fontWeight:'semibold',
    color:'#000', 
    textAlign: 'left', 
    marginBottom:9, 
    marginTop:9,
    marginStart:3,
  },
  addressOption: {
    height:65,
    backgroundColor:'#ECECEC',
    marginTop:9,
    marginStart:8,
    marginEnd:8,
    borderRadius:5,
  },
  iconStyle: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: 'grey',
  },
  manualInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 2,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    marginBottom:12
  },
  textInput: {
    marginLeft: 3,
    flex: 1,
    color:'#000',
    fontSize:16,
  },
  txtSeeAll :{
    fontSize:20,
    fontWeight:'semibold',
    color:'blue',
    textAlign:'center',
    alignItems:'flex-end',
    alignContent:'flex-end',
    alignSelf:'flex-end',
    marginBottom:9, 
    marginTop:9,
    marginEnd:9,
  }
});


export default HomeProfile;