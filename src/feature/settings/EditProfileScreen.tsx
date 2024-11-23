import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { HBStackParamList } from "../../navigation/rootNavigation";
import { NAVIGATION } from "../../constants/screens";
import { Toaster } from "../../constants/common";

const EditProfileScreen: React.FC = () => {
  const [name, setName] = useState("Karan Gupta");
  const [block, setBlock] = useState("A");
  const [flatNumber, setFlatNumber] = useState("A1679");
  const [vehicleNumber, setVehicleNumber] = useState("UP-78 ED");
  const [parkingSpot, setParkingSpot] = useState("A01");
  const navigation = useNavigation()

  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const handleSave = () => {
    console.log({
      name,
      block,
      flatNumber,
      vehicleNumber,
      parkingSpot,
    });
    alert("Profile updated successfully!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.header} >
                
                    <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
                  <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
                  <Text style={styles.headerText}>Edit Profile</Text>
                    </TouchableOpacity>
              </View>
              
        <View style = {styles.settingItemCard}>
        <Text style={styles.title}>Edit your profile info</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/437192839_460374373491729_8117494488611041816_n.jpg?ccb=11-4&oh=01_Q5AaILwJuKJtVGS_eeVV18Qpvx5rqSdhFm2W3VNjIVCWa18B&oe=674D2611&_nc_sid=5e03e0&_nc_cat=106", 
            }}
            style={styles.profileImage}
          />
          <View style={styles.editIconContainer}>
          <Image source={require('../../assets/png/edit_camera.png')}
                      style={{ marginStart: 39, marginEnd: 9, backgroundColor:'purple' }}
                  />
            <Text style={styles.editIconText}>Edit picture</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.label}>Block</Text>
          <TextInput
            style={styles.input}
            value={block}
            onChangeText={(text) => setBlock(text)}
          />

          <Text style={styles.label}>Flat number</Text>
          <TextInput
            style={styles.input}
            value={flatNumber}
            onChangeText={(text) => setFlatNumber(text)}
          />

          <Text style={styles.label}>Vehicle Number</Text>
          <TextInput
            style={styles.input}
            value={vehicleNumber}
            onChangeText={(text) => setVehicleNumber(text)}
          />

          <Text style={styles.label}>Alloted Parking spot</Text>
          <TextInput
            style={styles.input}
            value={parkingSpot}
            onChangeText={(text) => setParkingSpot(text)}
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
