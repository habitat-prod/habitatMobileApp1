import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
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
import { fetchHomeProfileData } from "./action/homeProfileAction";
import { RootState } from "src/redux/store/configureStore";
import { fetchMaintenanceData } from "../maintaineceAreas/actions/maintenanceAction";
import { fetchSecurityApprovalData } from "../securityApprovals/action/securityAprovalsAction";
import { Noticeboard } from "../maintaineceAreas/components/Noticeboard";

const HomeScreen: React.FC = () => {
  
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [visible, setVisible] = useState(true);
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();
  const flatDetailsList = useSelector((state:RootState) => state.otpVerification.userDetails);
  const flatListSize = useSelector((state:RootState)=> state.otpVerification.flatListSize);
  const dispatch = useDispatch();
  let flatNo = useSelector((state:RootState)=> state.tokenReducer.flatNo); // tried to define the type of state
  let buildingName = useSelector((state:RootState)=> state.tokenReducer.buildingName);
  let societyName = useSelector((state:RootState)=> state.tokenReducer.societyName);
  let societyAddress = useSelector((state:RootState)=> state.tokenReducer.societyAddress);
  // let parkingSpot = useSelector((state:RootState)=> state.tokenReducer.parking);
  let token = useSelector((state:RootState)=> state.tokenReducer.token);
  let societyId = useSelector((state:RootState)=> state.tokenReducer.societyId);
  let flatId = useSelector((state:RootState)=> state.tokenReducer.flatId);
  const serviceList = useSelector((state:RootState)=> state.pmsReducer.data.data);
  const [isSwitching, setIsSwitching] = useState(false);
  const [flatList, setFlatList] = useState(flatDetailsList);
  const [isServicesVisible,setIsServiceVisible] = useState(true);
  const [rotation, setRotation] = useState(180);  
  // const {maintenanceIsLoading, maintenanceData, maintenanceError}
  const maintenanceData = useSelector((state:RootState)=> state.maintenanceReducer.data);
  const maintenanceError = useSelector((state:RootState)=> state.maintenanceReducer.error);
  const maintenanceLoading = useSelector((state:RootState)=> state.maintenanceReducer.isLoading);

  console.log(`societyId inside the HOMESCREEN: === ${societyId}`);

  const list = [
    {
      name: "Ravi Mishra",
      buildingName:"Designation, Society Name",
      image: "",
      description:"Binance Expands Account Statement Function. With our VIP and institutional clients in mind, we’ve upgraded the account statement function"
    },
    {
      name: "Druv Patil",
      buildingName:"Designation, Society Name",
      image: "",
      description:"Binance Expands Account Statement Function. With our VIP and institutional clients in mind, we’ve upgraded the account statement function"
    },
    {
      name: "Mangal Singh",
      buildingName:"Signature city",
      image: "",
      description:"Binance Expands Account Statement Function. With our VIP and institutional clients in mind, we’ve upgraded the account statement function"
    },
    {
      name: "Varun Pratap",
      buildingName:"Tower C",
      image: "",
      description:"Binance Expands Account Statement Function. With our VIP and institutional clients in mind, we’ve upgraded the account statement function"
    },
  ]

    const [userDetails, setUserDetail] = useState({
    flatNo: '',
    buildingName: '',
    societyName: '',
    societyAddress: ''
    });

  // console.log(`serviceList from redux pipelines is: ${JSON.stringify(datas)}`);

  console.log(`the token after flat selection in HomeScreen from redux store is: ${JSON.stringify(token)}`);

  useEffect(()=>{
  const setUserDetails = async () => {
    flatNo = await AsyncStorage.getItem('flatNo');
    buildingName = await AsyncStorage.getItem('buildingName');
    societyName = await AsyncStorage.getItem('societyName');
    societyAddress = await AsyncStorage.getItem('societyAddress');
    societyId = await AsyncStorage.getItem('societyId');
    flatId = await AsyncStorage.getItem('flatId');
    token = await AsyncStorage.getItem('token');
    console.log({flatNo}, {buildingName}, {societyName}, {societyAddress});
    
      if(flatDetailsList.length === 0) {
        console.log('flatDetailsList has been end :((((((((((((((((((((((((((((((((((((((((((((((((((((');
        const flats = await AsyncStorage.getItem('flatList');
        const array = JSON.parse(flats);
        setFlatList(array);
        console.log(`SAVED list in Home Screen is: ${JSON.stringify(array)}`);
      }
      else{
        console.log('flatDetailList is alive :)))))))))))))))))))))))))))))))))))))))');
        console.log(flatDetailsList);
      }

    setUserDetail({
      flatNo:flatNo,
      buildingName:buildingName,
      societyName:societyName,
      societyAddress:societyAddress,
    });
  } 
  setUserDetails();
  },[]);

  useEffect(() => {
    if (societyId && token) {
        console.log("Fetching PMS services...");
        dispatch(fetchHomeProfileData());
    }
}, [societyId, token, dispatch]);

  const postUri = 'https://upload.wikimedia.org/wikipedia/en/3/3f/NobitaNobi.png';

  useEffect(() => {
    dispatch(fetchHomeProfileData());
    const checkFirstTimeUser = async () => {
      const firstTime = await AsyncStorage.getItem('isFirstTimeUser');
      if (firstTime && flatListSize>1) {
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
          <Text style={styles.txt}>{item.flatNo} {item.flatName}</Text>
          <Text style={{ color: 'grey', fontSize: 12 }}>{societyName || userDetails.societyName} {item.flatAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleFlatItemClick = async(item: any) => {
    try{
    Toaster(`flatId is: ${item.flatId.toString()} flatName is: ${item.flatName}`);
    const response = await dispatch(generateToken({propertyId: Number(item.flatId), userType: 'USER'}));
    console.log('going to call pms response API');
    const pmsResponse = await dispatch(fetchHomeProfileData());
    console.log(`pms response in Home Screen is: ${JSON.stringify(pmsResponse)}`);
    console.log(JSON.stringify(response));
    await AsyncStorage.setItem('isFirstTimeUser', 'false');
    setIsFirstTime(false);
    setVisible(false); // Close dialog after selection
    }
    catch(error) {
      console.error(`error in handleFlatItemClick: ${error}`);
    }
  }

  const handleSwitchFlat =() =>{
    setIsSwitching(true);
    setVisible(true); 
    setIsFirstTime(true);
  }
  
  useEffect(()=>{
    console.log(`maintenance Data from Home: ${JSON.stringify(maintenanceData)}`);
    console.log(`maintenance Error from Home: ${JSON.stringify(maintenanceError)}`);
    console.log(`maintenance Loading from Home: ${JSON.stringify(maintenanceLoading)}`);
    // if(maintenanceLoading) {return <ActivityIndicator/>}
  },[maintenanceData,maintenanceError, maintenanceLoading]);

  const handleMaintenanceData = async()=> {
    const maintenance = await dispatch(fetchMaintenanceData());
  }

  const handleSecurityApprovalData = async() =>{
    const response = await dispatch(fetchSecurityApprovalData({flatId:1}));
    console.log(`flatId from Screen is: ${flatId}`)
    console.log(`the Response inside Screen of Security Approvals is: => ${JSON.stringify(response)}`)
  }

  const handleServiceClick = (service) => {
    switch (service.id) {
      case 1:
        console.log("Navigate to Maintenance screen");
        handleMaintenanceData();
        defaultNavigation.navigate(NAVIGATION.MaintainaceAreaStackNav,{list:maintenanceData}); 
        break;
      case 2:
        console.log("Navigate to Security screen "+service.id);
        handleSecurityApprovalData();
        defaultNavigation.navigate(NAVIGATION.SecurityApprovalsStackNav); 
        break;
      case 3:
        console.log("Navigate to Parking screen");
        defaultNavigation.navigate(NAVIGATION.ParkingAreaStackNav);
        break;
      case 4:
        console.log("Navigate to Club House screen");
        defaultNavigation.navigate(NAVIGATION.ReserveCommonAreaStackNav);
        break;
      case 5:
        console.log("Navigate to Hazard Safety screen");
        defaultNavigation.navigate(NAVIGATION.HazardAreaStackNav);
        break;
      case 6:
        console.log("Navigate to Emergency screen");
        defaultNavigation.navigate(NAVIGATION.AmbulanceAreaStackNav);
        break;
      default:
        console.log(`Unknown service: ${service.title}`);
    }
  };
  
  const togleServiceVisibility =()=>{
    setIsServiceVisible(!isServicesVisible);
    setRotation((prevRotation) => (prevRotation === 0 ? 180 : 0));
  }

  return (
    <SafeAreaView style={styles.container2}>
    <ScrollView style={styles.container}>
        
      <View style={styles.header}>
        <View style={{flexDirection:'column', width:180}}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.headerTitle}>{flatNo || userDetails.flatNo}, {buildingName || userDetails.buildingName}</Text>
          <TouchableOpacity style={{marginTop:3}} onPress={()=> {handleSwitchFlat()}}>
        <Image source={require('../../assets/png/arrow_down.png')} style={{ marginTop:1, height:21, width:26}}/>
          </TouchableOpacity>
        </View>
          <Text style={styles.headerSubtitle}>
            {societyName || userDetails.societyName}, {societyAddress || userDetails.societyAddress}
          </Text>
        </View>
        <TouchableOpacity  onPress={()=> defaultNavigation.navigate(NAVIGATION.SettingNav)}>
          <Image style={{width:34, height:34}} source={require('../../assets/png/account.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.servicesContainer}>
        <View style={styles.servicesHeader}>
          <Text style={styles.servicesTitle}>Habitat's Services</Text>
          <TouchableOpacity  onPress={()=> togleServiceVisibility()}>
            <Image source={require('../../assets/png/arrow_down.png')} style={[
            {width:30,height:32, marginTop:3},
          {
            transform: [{ rotate: `${rotation}deg` }], // apply rotation
          },
        ]}/>
          </TouchableOpacity>
        </View>
        {isServicesVisible && (
        <View style={styles.servicesGrid}>
          {Array.isArray(serviceList)? serviceList.map((service) => (
            <TouchableOpacity key={service.pmsId} style={styles.serviceItem} onPress={()=>{handleServiceClick(service); console.log(service.pmsId)}}>
              <Image
                source={{ uri: service.s3Path }}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>{service.pmsName}</Text>
            </TouchableOpacity>
          ))
          : <Text>No Services available yet!</Text>
        }
        </View>)
        }
      </View>

      {maintenanceLoading && <ActivityIndicator style={{flex:1, justifyContent:'center'}}/>}

      <View style={styles.happeningsContainer}>
        <View style={{flexDirection:'row',marginHorizontal:9, justifyContent:'space-between'}}>
        <Text style={[styles.happeningsTitle,{justifyContent:'flex-start'}]}>Announcements</Text>
        <TouchableOpacity 
        onPress={()=> 
          defaultNavigation.navigate(NAVIGATION.AnnouncementScreenNav)}
          >
        <Text style={[styles.happeningsTitle,{marginEnd:9,fontSize:19,justifyContent:'flex-end', alignSelf:'flex-end'}]}>+</Text>
        </TouchableOpacity>
        </View>
        {/* use flatList here... */}
        <FlatList
        data={list}
        renderItem={(item)=><Noticeboard item={item.item}/>}
        showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>

    { isFirstTime && (
          <Modal visible={visible} style={{ bottom: 0, position: 'absolute', paddingTop: 220, marginHorizontal: 5, marginBottom: -110}} onDismiss={() => { isSwitching? setVisible(false): Toaster('Please Select any flat to Access incredible features of APP :)') }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '100%',
                height: '80%',
                padding: 1,
                borderTopStartRadius: 21,
                borderTopEndRadius: 21,
              }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.txtTitle}>Select a saved address</Text>
              </View>

              {/* Address List */}
              <FlatList
                data={flatList}
                keyExtractor={(item) => item.id}
                renderItem={renderAddressItem}
                contentContainerStyle={{ paddingBottom: 10 }}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
              />
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
    borderWidth:0.4,
    borderColor:'grey'
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
    fontSize: 18,
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
    borderWidth:0.4,
    borderColor:'grey',
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

