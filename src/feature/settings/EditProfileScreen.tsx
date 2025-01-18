import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { HBStackParamList } from "../../navigation/rootNavigation";
import { NAVIGATION } from "../../constants/screens";
import { Toaster } from "../../constants/common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const EditProfileScreen: React.FC = () => {
  const [name, setName] = useState("Karan Gupta");
  const [block, setBlock] = useState("A");
  const [flatNumber, setFlatNumber] = useState("A1679");
  const [vehicleNumber, setVehicleNumber] = useState("UP-78 ED");
  const [email, setEmail] = useState("AnitaJi@habitat.com");
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState('');

  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const handleSave = () => {
    console.log({
      name,
      block,
      flatNumber,
      vehicleNumber,
    });
    Alert.alert('Update',"Profile updated successfully!");
  };

  useEffect(()=>{
    const fetchUserDetails = async()=>{
    const a: any = await AsyncStorage.getItem('userName');
    const b: any = await AsyncStorage.getItem('flatNo');
    const c: any = await AsyncStorage.getItem('buildingName');
    setName(a);
    setFlatNumber(b);
    setBlock(c);
    }
    fetchUserDetails();
  },[]);

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (result.assets && result.assets[0]) {
      setImageUri(result.assets[0].uri);
      console.log(`image uri is: ${imageUri}`);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (result.assets && result.assets[0]) {
      setImageUri(result.assets[0].uri);
      console.log(`image uri is: ${imageUri}`);
    }
  };

  const handleImageSelection = () => {
    Alert.alert(
      'Select Image',
      'Choose an option to select an image',
      [
        {
          text: 'Camera',
          onPress: () => openCamera(),
        },
        {
          text: 'Gallery',
          onPress: () => openGallery(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.header} >
                
                    <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
                  <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
                  </TouchableOpacity>
              <Text style={styles.headerText}>Edit Profile</Text>
                    </View>
              
        <View style = {styles.settingItemCard}>
        <Text style={styles.title}>Edit your profile info</Text>

        <TouchableOpacity style={styles.imageContainer} onPress={()=> handleImageSelection()}>
          <Image
            source={{
              uri:imageUri, 
            }}
            style={styles.profileImage}
          />
          <View style={styles.editIconContainer}>
          <Image source={require('../../assets/png/edit_camera.png')}
                      style={{ marginStart: 39, marginEnd: 9, backgroundColor:'purple' }}
                  />
            <Text style={styles.editIconText}>Edit picture</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            editable={false}
          />

          <Text style={styles.label}>Block</Text>
          <TextInput
            style={styles.input}
            value={block}
            editable={false}
            onChangeText={(text) => setBlock(text)}
          />

          <Text style={styles.label}>Flat number</Text>
          <TextInput
            style={styles.input}
            value={flatNumber}
            editable={false}
            onChangeText={(text) => setFlatNumber(text)}
          />

          <Text style={styles.label}>Vehicle Number</Text>
          <TextInput
            style={styles.input}
            value={vehicleNumber}
            onChangeText={(text) => setVehicleNumber(text)}
          />

          <Text style={styles.label}>Email Id</Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="enter your email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => alert("Changes discarded")}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    // padding: 16,
  },
  title: {
    fontSize: 16,
    // fontWeight: "bold",
    // textAlign: "center",
    marginStart:16,
    marginVertical: 12,
    color: "grey",
  },
  header: {
    backgroundColor: '#06B8C3',
    // paddingVertical: 15,
    // alignItems: 'center',
    flexDirection:'row',
    elevation:-9,
    height:200,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    paddingLeft:2
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'normal',
    marginTop:36,
  },
  imageContainer: {
    // alignItems: "center",
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    marginVertical: 16,
    marginStart:16,
    // backgroundColor:'red'
  },
  settingItemCard:{
    backgroundColor:'#fff',
    alignContent:'center',
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    marginTop:-100,
    elevation:12,
    marginHorizontal:24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ddd",
    backgroundColor:'grey'
  },
  editIconContainer: {
    // flex:1,
    height:40, 
    marginTop: -69,    
    // width:50,
    flexDirection:'column'
  },
  editIconText: {
    fontSize:13, 
    color:'#fff',
    fontWeight:'normal',
    marginStart:14,
    // marginTop:-12,
  },
  inputContainer: {
    marginTop: 16,
    marginHorizontal:12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007bff",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom:16,
  },
  cancelButtonText: {
    color: "#007bff",
    fontWeight: "bold",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom:16,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
