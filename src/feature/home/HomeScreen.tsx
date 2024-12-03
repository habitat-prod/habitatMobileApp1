import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { Modal } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { HBStackParamList } from "../../navigation/rootNavigation";
import {useNavigation} from "@react-navigation/native"
import { NAVIGATION } from "../../constants/screens";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "../../../src/utils/common";
import { generateToken } from "./action/tokenGenAction";
import { property } from "lodash";

const HomeScreen: React.FC = () => {
  const services = [
    { id: "1", title: "Maintenance", icon: "https://images.ctfassets.net/grb5fvwhwnyo/3etjlp73QMlp08bqO9TrTt/4bb2d839897bf3a02832268e7923ec6e/card-the-importance-of-maintenance-management.jpg" },
    { id: "2", title: "Security", icon: "https://mpg-egy.com/wp-content/uploads/2024/05/Top-Five-Security-Guard-Tasks.jpg" },
    { id: "3", title: "Parking", icon: "https://circontrol.com/wp-content/uploads/2023/10/180125-Circontrol-BAIXA-80-1.jpg" },
    { id: "4", title: "Club House", icon: "https://media.bluentcad.com/images/clubhouse-design.webp" },
    { id: "5", title: "Hazard Safety", icon: "https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya3BsYWNlJTIwc2FmZXR5fGVufDB8fDB8fHww" },
    { id: "6", title: "Emergency", icon: "https://img.freepik.com/premium-vector/poster-emergency_188544-7066.jpg" },
  ];

  
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [visible, setVisible] = useState(true);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();
  const flatDetailsList = useSelector((state) => state.otpVerification.userDetails);
  const flatListSize = useSelector((state)=> state.otpVerification.flatListSize);
  const tempToken = useSelector((state)=> state.otpVerification.token);
  const dispatch = useDispatch();
  const flatNo = useSelector((state)=> state.tokenReducer.flatNo);
  const buildingName = useSelector((state)=> state.tokenReducer.buildingName);
  const societyName = useSelector((state)=> state.tokenReducer.societyName);
  const societyAddress = useSelector((state)=> state.tokenReducer.societyAddress);

  console.log(`the list in HomeScreen from redux store is: ${JSON.stringify(flatDetailsList)}`);
  console.log(`the listSize in HomeScreen from redux store is: ${JSON.stringify(flatListSize)}`);
  console.log(`the tempToken in HomeScreen from redux store is: ${JSON.stringify(tempToken)}`);
  // console.log(`the listSize is: ${flatDetailsList.length}`);

  // console.log(`listSize from the redux Store is: ${otpVerification.listSize}`)

  const postUri = 'https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/310465591_111619854962689_2603035308081784076_n.jpg?ccb=11-4&oh=01_Q5AaIOeNlhokc812B_b9ZEATDZear2IhKgCxfhTJQz9Tivo6&oe=674D2520&_nc_sid=5e03e0&_nc_cat=104';

  const addressData = [
    {
      id: 1,
      title: 'Home',
      description: 'House Number 4, First Floor, Khatipura, Jaipur',
      icon: require('../../assets/png/habitaticon.png'),
    },
    {
      id: 2,
      title: 'Office',
      description: '2nd Floor, IT Tower, Tech Park, Indore',
      icon: require('../../assets/png/habitaticon.png'),
    },
    {
      id: 3,
      title: 'Warehouse',
      description: 'Ground Floor, Industrial Area, Banglore',
      icon: require('../../assets/png/habitaticon.png'),
    },
    {
      id: 4,
      title: 'Home',
      description: 'Ground Floor, Industrial Area, Kanpur',
      icon: require('../../assets/png/habitaticon.png'),
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
        setVisible(true); // Show choose flat dialog if user is entering first time
      }
    };
    checkFirstTimeUser();
  }, []);

  const renderAddressItem = ({ item }: { item: typeof flatDetailsList[0] }) => (
    <TouchableOpacity style={styles.addressOption} onPress={()=>handleFlatItemClick(item)}>
      <View style={{ flexDirection: 'row', marginTop: 5, padding: 5 }}>
        <Image source={require('../../assets/png/habitaticon.png')} style={styles.iconStyle} />
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.txt}>{item.flatName}</Text>
          <Text style={{ color: 'grey', fontSize: 12 }}>{item.flatAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleFlatItemClick = async(item: any) => {
    Toaster(`flatId is: ${item.flatId.toString()} flatName is: ${item.flatName}`);
    const response = await dispatch(generateToken({propertyId: Number(item.flatId), userType: 'USER'}));
    console.log(JSON.stringify(response));
    await AsyncStorage.setItem('isFirstTimeUser', 'false');
    setIsFirstTime(false);
    setVisible(false); // Close the modal after selection
  }

  const handleServiceClick = (service: { id: string; title: string; icon: string }) => {
    switch (service.id) {
      case "1":
        console.log("Navigate to Maintenance screen");
        defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav); 
        break;
      case "2":
        console.log("Navigate to Security screen");
        defaultNavigation.navigate(NAVIGATION.SecurityApprovalsStackNav); 
        break;
      case "3":
        console.log("Navigate to Parking screen");
        defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav);
        break;
      case "4":
        console.log("Navigate to Club House screen");
        defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav);
        break;
      case "5":
        console.log("Navigate to Hazard Safety screen");
        defaultNavigation.navigate(NAVIGATION.HazardAreaStackNav);
        break;
      case "6":
        console.log("Navigate to Emergency screen");
        defaultNavigation.navigate(NAVIGATION.AmbulanceAreaStackNav);
        break;
      default:
        console.log(`Unknown service: ${service.title}`);
    }
  };
  

  return (
    <SafeAreaView style={styles.container2}>
        
    <ScrollView style={styles.container}>
        
      <View style={styles.header}>
        <View style={{flexDirection:'column', width:180}}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.headerTitle}>235, Block C</Text>
        <Image source={require('../../assets/png/arrow_down.png')} style={{ marginTop:3}}/>
        </View>
          <Text style={styles.headerSubtitle}>
            Eshwar Heights, Indira Nagar
          </Text>
        </View>
        <TouchableOpacity  onPress={()=> defaultNavigation.navigate(NAVIGATION.SettingNav)}>
          <Image style={{width:30, height:30}} source={require('../../assets/png/account.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../assets/png/icon_search.png')} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for services..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
            <Image source={require('../../assets/png/mic.png')} style={{alignSelf:'flex-end', alignContent:'center',alignItems:'center',justifyContent:'center', marginEnd:5}}/>
        </TouchableOpacity>
        </View>

      <View style={styles.servicesContainer}>
        <View style={styles.servicesHeader}>
          <Text style={styles.servicesTitle}>Habitat's Services</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/png/arrow_up.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceItem} onPress={()=>handleServiceClick(service)}>
              <Image
                source={{ uri: service.icon }}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>{service.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.happeningsContainer}>
        <Text style={styles.happeningsTitle}>Happenings Around You</Text>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={{flexDirection:'row',}}>
                <Image source={{uri:postUri}} style={styles.profileImage} />
            <View>
              <Text style={styles.postAuthor}>Shreyash Arvind Gore</Text>
              <Text style={styles.postLocation}>Tower C</Text>
            </View>
            </View>
            <TouchableOpacity>
              <Image source={require('../../assets/png/dots.png')} style={{marginEnd:9}} />
            </TouchableOpacity>
          </View>
          <Text style={styles.postContent}>
            Binance Expands Account Statement Function. With our VIP and
            institutional clients in mind, we've upgraded the account statement
            function.
          </Text>
          <Image
            source={{ uri: "https://t3.ftcdn.net/jpg/02/71/71/82/360_F_271718267_7B2jXwEGv1dZYdPC4ZNSQSDTuHAhWbsU.jpg" }}
            style={styles.postImage}
          />
          <TouchableOpacity style={{backgroundColor:'#06B8C3', width:'100%',paddingVertical:8, borderRadius:4, marginTop:5, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:14, color:'#fff', marginStart:9}}>Purchase This Service</Text>
            <Text style={{fontSize:14, color:'#fff', marginEnd:9}}>Rs. 5,299/-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    {(flatListSize>1) && isFirstTime && (
          <Modal visible={visible} style={{ bottom: 0, position: 'absolute', paddingTop: 220, marginHorizontal: 5, marginBottom: 19}} onDismiss={() => { Toaster('Please Select any flat to Access incredible features of APP :)') }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '100%',
                padding: 5,
                borderTopStartRadius: 21,
                borderTopEndRadius: 21,
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.txtTitle}>Select a saved address</Text>
                <Text style={styles.txtSeeAll}>See all</Text>
              </View>

              {/* Address List */}
              <FlatList
                data={flatDetailsList}
                keyExtractor={(item) => item.id}
                renderItem={renderAddressItem}
                contentContainerStyle={{ paddingBottom: 10 }}
              />

              <View style={styles.manualInputContainer}>
                <Image source={require('../../assets/png/icon_search.png')} style={styles.iconStyle} />
                <TextInput style={styles.textInput} placeholder="Select Location Manually" />
              </View>
            </View>
          </Modal>
        )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  container2: {
    flex: 1,
    marginHorizontal: wp('2.22%'),
    gap: wp('3.33%'),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color:'#000'
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#06B8C3',
    paddingHorizontal: 8,
    // paddingVertical: 2,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },
  servicesContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#06B8C3',
    marginBottom: 16,
  },
  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  servicesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#000'
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 12,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    marginBottom: 4,
    borderRadius: 8,
  },
  serviceText: {
    fontSize: 12,
    textAlign: "center",
  },
  happeningsContainer: {
    backgroundColor:'#fff',
    marginBottom: 16,
  },
  happeningsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop:9,
    marginStart:9,
    color:'#000'
  },
  post: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: "bold",
    color:'#000',
    marginStart:9,
    marginTop:3
  },
  postLocation: {
    fontSize: 12,
    color: "#06B8C3",
    marginStart:9,
  },
  postContent: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  postImage: {
    width: "100%",
    height: 170,
    borderRadius: 4,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  manualInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal:12,
    // padding: 2,
    borderWidth: 0.2,
    borderColor: 'grey',
    borderRadius: 8,
    marginBottom:12
  },
  
  modalContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 9,
    marginBottom: 0,
  },
  txtTitle: {
    fontSize:20,
    fontWeight:'semibold',
    color:'#000', 
    textAlign: 'left', 
    marginBottom:9, 
    marginTop:9,
    marginStart:9,
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
  textInput: {
    marginLeft: 3,
    flex: 1,
    color:'#000',
    fontSize:14,
  },
  txtSeeAll :{
    fontSize:18,
    fontWeight:'semibold',
    color:'blue',
    textAlign:'center',
    alignItems:'flex-end',
    alignContent:'flex-end',
    alignSelf:'flex-end',
    marginBottom:9, 
    marginTop:9,
    marginEnd:9,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default HomeScreen;

