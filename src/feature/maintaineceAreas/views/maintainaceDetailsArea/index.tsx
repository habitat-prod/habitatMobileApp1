import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
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
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAmenityProblemData } from '../../actions/amenityProblemAction';
import { RootState } from 'src/redux/store/configureStore';
import { ActionTypes } from '../../../../../src/utils/constants';
import { Shadow } from 'react-native-shadow-2';

const MaintainaceDetailsArea: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();
  const dispatch = useDispatch();
  const response = useSelector((state:RootState)=>state.maintenanceReducer.data);
  const isLoading = useSelector((state:RootState)=>state.maintenanceReducer.isLoading);
  const isError = useSelector((state:RootState)=>state.maintenanceReducer.error);


  const filteredList = response.reduce((unique, item) => {
    
    if (!unique.some(element => element.amenityId === item.amenityId)) {
      unique.push(item);
    }
    // console.log(unique);
    return unique;
  }, []);

  const iconMapping: Record<string, { small: JSX.Element; big: JSX.Element }> = {
    CLUBHOUSE: { small: <Clubhouse />, big: <ClubhouseBig /> },
    PARKING: { small: <Parking />, big: <ParkingBig /> },
    GARDEN: { small: <Garden />, big: <GardenBig /> },
    STAIRS: { small: <Stairs />, big: <StairsBig /> },
    ELEVATOR: { small: <Elevator />, big: <ElevatorBig /> },
    PAVEMENT: { small: <Pavement />, big: <PavementBig /> },
    WAITING_AREA: { small: <WaitingArea />, big: <WaitingAreaBig /> },
    GUEST_PARKING: { small: <GuestParking />, big: <GuestParkingBig /> },
    LOG: { small: <Log />, big: <Log /> }, // Adjust if "big" is different
  };

  // const maintainanceListingCardData = [ 
  //   {
  //     id:1,
  //     title: 'Clubhouse',
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     iconSvg: <Clubhouse />,
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Clubhouse',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <ClubhouseBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:2,
  //     title: 'Parking',
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     iconSvg: <Parking />,
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Parking',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <ParkingBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:3,
  //     title: 'Gardens',
  //     iconSvg: <Garden />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Gardens',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <GardenBig />,
  //       },
  //     }),
  //   },
  //   {
  //     id:4,
  //     title: 'Stairs',
  //     iconSvg: <Stairs />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: async() => await defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Stairs',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <StairsBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:4,
  //     title: 'Elevators',
  //     iconSvg: <Elevator />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Elevators',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <ElevatorBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:5,
  //     title: 'Pavements',
  //     iconSvg: <Pavement />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Pavements',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <PavementBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:6,
  //     title: 'Waiting area',
  //     iconSvg: <WaitingArea />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Waiting area',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <WaitingAreaBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:7,
  //     title: 'Guest Parking',
  //     iconSvg: <GuestParking />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.MaintainanceListDetails,
  //       params: {
  //         title: 'Guest Parking',
  //         imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //         iconSvg: <GuestParkingBig />
  //       },
  //     }),
  //   },
  //   {
  //     id:8,
  //     title: 'Log',
  //     iconSvg: <Log />,
  //     imageUri: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
  //     onClick: () => defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
  //       screen: MaintainanceAreasScreens.LogDetailsArea,
  //       params: {},
  //     }),
  //   }
  // ];

        const getPic = (amenityId:any)=>{
          switch(amenityId){ // here i'll update the logic to show the images, according to the amenity names.
            case 1: return <Garden/>
            case 2: return <Stairs/>
            case 3: return <Elevator/>
            case 4: return <Parking/>
            case 5: return <WaitingArea/>
            case 6: return <Pavement/>
            case 7: return <GuestParking/>
            case 8: return <Log/>
            case 9: return <Clubhouse/>
          }
        }

const renderCard = ({ item }: { item: any }) => {
  
  const iconData = iconMapping[item.amenityName] || { small: <Log />, big: <Log /> };

  return (
    <Shadow
    style={{flex:1, alignContent:'center', }}
    distance={5} // Shadow distance (blur)
    startColor="rgba(0, 255, 255, 0.19)" // Blue shadow with opacity
    offset={[12, 14]} // X and Y direction for shadow
    containerStyle={{ margin: 9 }}
    >
    <TouchableOpacity
      style={{
        flex:1,
        width: Dimensions.get('window').width / 2 - 45,
        height: 150,
        borderRadius: 9,
        backgroundColor: '#fff',
        margin: 12,
        overflow: 'hidden',
        elevation: 2,
        paddingVertical:12,
        justifyContent:'center'
      }}
      onPress={async () => {
        await dispatch({
          type: ActionTypes.FETCH_Amenity_Problem_DATA,
          amenityId: item.id,
        });
        
        console.log(`Response from Redux: ${JSON.stringify(response)}`);


    defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav, {
      screen: MaintainanceAreasScreens.MaintainanceListDetails,
      params: {
        title: item.amenityName,
        imageUrl: item.s3Path || 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png',
        iconSvg: iconData.big,
        amenityId: item.amenityId
      },
    });
  }}
    >
      {/* <Image
        source={{ uri: item.imageUri }}
        style={{
          width: '100%',
          height: '70%',
          resizeMode: 'cover',
        }}
      /> */}
      <View
        style={{
          height: '30%',
          justifyContent: 'center',
          alignItems: 'center',
          flex:1,
          padding: 5,
        }}
      >
        {getPic(item.amenityId)}
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop:3 }}>
          {item.amenityName}
        </Text>
      </View>
    </TouchableOpacity>
   </Shadow>
  );
};

return (
  <SafeAreaView style={{flex:1, marginHorizontal:3}}>
    <View style={[styles.subContainer,{marginStart:12, marginTop:4}]}>
      <IMIcon
        testId="ArrowBackFilled"
        iconSvg={<ArrowBackFilled />}
        onClick={defaultNavigation.goBack}
      />
      <Text style={{fontSize: 18, fontWeight: '700', color: 'black',marginStart:3}}> All Spaces </Text>
    </View>
    <View style={{ flex: 1, }}>
    <FlatList
      data={filteredList}
      numColumns={2}
      renderItem={renderCard}
      keyExtractor={(item: any) => item.id.toString()}
      contentContainerStyle={{
        // paddingHorizontal: 10,
        paddingVertical: 4,
      }}
    />
    </View>
      {isLoading && <ActivityIndicator style={{flex:1,justifyContent:'center'}}/>}
  </SafeAreaView>
);
};


export default MaintainaceDetailsArea;
