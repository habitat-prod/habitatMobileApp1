import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const PermanentPassDetail: React.FC = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobileNumber: '',
    passType: '',
    society: '',
    associatedAddress: '',
    image: ''
  });

  const route = useRoute();

  useEffect(()=>{
    console.log(`route is: ${JSON.stringify(route)}`);
// Extracting member data from route params
if (route.params && route.params.member) {
    const { member } = route.params;
    // setImageUri(member.image);
    setFormData({
      name: member.name || '',
      age: '', // Assuming age is not provided in the route params
      mobileNumber: member.phone || '',
      passType: member.status || '',
      society: member.society || '', // Assuming society is not provided in the route params
      associatedAddress: member.associatedAddress || '', // Assuming associatedAddress is not provided in the route params
      image: member.image || ''
    });
    console.log(`form data is: ${formData}`);
  }
  },[route]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.header} >
                
                    <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
                  <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
                  <Text style={styles.headerText}>Permanent Pass</Text>
                    </TouchableOpacity>
              </View>


        <ScrollView contentContainerStyle={styles.itemCard}>
        <View style={styles.imagePlaceholder}>
          <TouchableOpacity>
            {formData.image ? (
              <>
                <Image source={{ uri: formData.image }} style={styles.image} />
                {/* <View style={styles.overlayContainer}>
                  <Text style={styles.overlayText}>+</Text>
                </View> */}
              </>
            ) : (
              <>
                <Image source={require('../../assets/png/gallery.png')} style={styles.image} />
                {/* <View style={styles.overlayContainer}>
                  <Text style={styles.overlayText}>+</Text>
                </View> */}
              </>
            )}
          </TouchableOpacity>

        </View>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor={'grey'}
          value={formData.name}
          editable={false}
          onChangeText={(value) => console.log('name', value)}
        />


        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          placeholderTextColor={'grey'}
          maxLength={10}
          editable={false}
          value={formData.age}
          onChangeText={(value) => console.log('age', value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          keyboardType="numeric"
          placeholderTextColor={'grey'}
          maxLength={10}
          editable={false}
          value={formData.mobileNumber}
          onChangeText={(value) => console.log('mobileNumber', value)}
        />


        <TextInput
          style={styles.input}
          placeholder="Position"
          placeholderTextColor={'grey'}
          value={formData.passType}
          editable={false}
          onChangeText={(value) => console.log('position', value)}
        />


        <TextInput
          style={styles.input}
          placeholder="Assigned Society"
          placeholderTextColor={'grey'}
          value={formData.society}
          editable={false}
          onChangeText={(value) => console.log('assignedSociety', value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor={'grey'}
          editable={false}
          value={formData.associatedAddress}
          onChangeText={(value) => console.log('address', value)}
        />


      </ScrollView>
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
    marginBottom:-100
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
    marginBottom: 16,
    paddingTop:12,
    // marginTop:-100,
    elevation:1,
    marginHorizontal:24,
    paddingHorizontal:12,
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
//   input: {
//     backgroundColor: "#fff",
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     fontSize: 16,
//     marginBottom: 16,
//   },
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
  imagePlaceholder: {
    height: 100,
    width: 100,
    backgroundColor: '#E0E0E0',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  plusIcon: {
    fontSize: 24,
    color: '#888',
  },
  overlayContainer: {
    position: 'absolute',
    top: 5,
    right: 1,
    backgroundColor: '#fff',
    // padding: 5,
    borderRadius: 30,
    height: 32,
    width: 32,
  },
  option: {
    fontSize: 15
  },
  overlayText: {
    fontSize: 19,
    color: 'green',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  dropdownContainer: {
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    overflow: 'hidden',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#DDD',
    borderWidth: 1,
    color:'#000'
  },
  dropdownLabel: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    color: '#555',
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth:0.6,
    borderColor:'grey'
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  tag: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 10,
    marginBottom: 10,
  },
  activeTag: {
    backgroundColor: '#06B8C3',
    borderColor: '#4CAF50',
  },
  tagText: {
    color: '#555',
  },
  activeTagText: {
    color: '#FFF',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    marginBottom: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
//   header: {
//     backgroundColor: '#06B8C3',
//     flexDirection: 'row',
//     height: 50,
//     width: '100%'
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'normal',
//   },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifContainer: {
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  gif: {
    width: 150,
    height: 150,
  },
  modalText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  idContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 12
  },
  idTypeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000'
  },
  plusContainer: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    height: 80,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 9
  },
  plusText: {
    fontSize: 19,
    color: '#000',
    flex: 1,
    textAlignVertical: 'center'
  },
  dividerLine: {
    backgroundColor: '#000',
    height: 1,
    width: '100%',
    marginVertical: 12
  },
  idCountText: {
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 5,
    fontSize: 12,
    marginHorizontal: 5
  },
  checkbox: {
    alignSelf: "center",
    fontSize: 5,
  },
});

export default PermanentPassDetail;
