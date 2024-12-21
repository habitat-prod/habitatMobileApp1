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
import CheckBox from "react-native-check-box";
import { Picker } from "@react-native-picker/picker";


const AddCoResidents: React.FC = () => {
  const [name, setName] = useState("Tony Stark");
  const [block, setBlock] = useState("A");
  const [flatNumber, setFlatNumber] = useState("21");
  const [contactNumber, setContactNumber] = useState("9878423679");
  const [role, setRole] = useState("Select Role");
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleSave = () => {
    alert("Request added successfully.");
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.header} >
                
                    <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
                  <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
                  <Text style={styles.headerText}>Add Co-Residents</Text>
                    </TouchableOpacity>
              </View>
              
        <View style = {styles.itemCard}>
        <Text style={styles.title}>Add your co-residents details here</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="enter the name"
            onChangeText={(text) => setName(text)}
          />


          {/* <Text style={styles.label}>Flat number</Text>
          <TextInput
            style={styles.input}
            value={flatNumber}
            onChangeText={(text) => setFlatNumber(text)}
          /> */}

          <Text style={styles.label}>Contact Details</Text>
          <TextInput
            style={styles.input}
            value={contactNumber}
            placeholder="enter the phone number"
            onChangeText={(text) => setContactNumber(text)}
          />

          {/* <Text style={styles.label}>Role</Text>
          <TextInput
            style={styles.input}
            value={role}
            onChangeText={(text) => setRole(text)}
          /> */}
        
        <View style={styles.dropdownContainer}>
              
              <Picker
                selectedValue={role}
                onValueChange={(value:any) => setRole(value)}
                style={styles.picker}
              >
                <Picker.Item label="Select Role" value="" style={styles.option}/>
                <Picker.Item label="Co-Owner" value="Co-Owner" style={styles.option}/>
                <Picker.Item label="Tenant" value="Tenant" style={styles.option}/>
                <Picker.Item label="Guest" value={"Guest"} style={styles.option}/>
              </Picker>
            </View>
          
        </View>
        
      <CheckBox style={{marginStart:12}} rightText="I hereby give consent that the above-provided details are true." isChecked={isChecked} onClick={()=> setIsChecked(!isChecked)} rightTextStyle={{color:'#000'}}/>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => alert("Changes discarded")}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.requestButton} onPress={handleSave}>
            <Text style={styles.requestButtonText}>Request</Text>
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
    backgroundColor: "#fff",
  },
  scrollContainer: {
    // padding: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  option: {
    fontSize:15
  },
  dropdownContainer: {
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    overflow: 'hidden', 
  },
  title: {
    fontSize: 16,
    marginStart:16,
    marginVertical: 12,
    color: "grey",
  },
  header: {
    backgroundColor: '#06B8C3',
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
  itemCard:{
    backgroundColor:'#fff',
    alignContent:'center',
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    borderRadius:12,
    marginBottom:12,
    marginTop:-100,
    elevation:1,
    marginHorizontal:24,
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
  requestButton: {
    flex: 1,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom:16,
  },
  requestButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
    flexShrink: 1,
  },
});

export default AddCoResidents;
