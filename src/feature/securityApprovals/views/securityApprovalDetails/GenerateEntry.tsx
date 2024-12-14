import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Toaster } from '../../../../../src/utils/common';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';

const GenerateEntry = () => {

  const [people,setPeople] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    towerNumber: '',
    flatNumber: '',
    vehicleType: '',
    numberPlate: '',
    numberOfPeople: `${people}`,
    visitorType: '',
    purpose: '',
    inComingDate: '- -/- -/- - - -',
    inComingTime: '00-00 AM',
  });

  const [imageUri, setImageUri] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2]+'/'+x1[1]+'/'+x1[0]);
    Toaster(`date has been picked: ${x1}`);
    handleInputChange('inComingDate',x1[2]+'/'+x1[1]+'/'+x1[0]);
    hideDatePicker();
    showTimePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (date: any) => {
    Toaster(`A time has been picked: ${time}`);
    const dt = new Date(date);
    const time = dt.toLocaleTimeString();
    handleInputChange('inComingTime',time);
    console.log(`the time is: ${time}`)
    hideTimePicker();
    // navigation.goBack();
    console.log(formData);
  };

  const navigation = useNavigation();

  const handleInputChange = (field:any, value:any) => {
    setFormData({ ...formData, [field]: value });
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (result.assets && result.assets[0]) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });
    if (result.assets && result.assets[0]) {
      setImageUri(result.assets[0].uri);
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
    <SafeAreaView style={{flex:1}}>
      <View style={{backgroundColor:'#06B8C3',height:50,width:'100%',}}>
      <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:22, fontWeight:'normal',color:'white', alignSelf:'center', marginStart:16, marginEnd:7}}>{'<'}</Text>
            <Text style={[styles.headerText,{alignSelf:'center'}]}>Generate an entry</Text>
                </TouchableOpacity>
      </View>
        {/* <Text style={styles.plusIcon}>+</Text> */}
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imagePlaceholder}>
        <TouchableOpacity onPress={handleImageSelection}>
        {imageUri ? (
              <>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <View style={styles.overlayContainer}>
                  <Text style={styles.overlayText}>+</Text>
                </View>
              </>
        ) : (
          <>
          <Image source={require('../../../../assets/png/gallery.png')} style={styles.image} />
          <View style={styles.overlayContainer}>
            <Text style={styles.overlayText}>+</Text>
          </View>
        </>
         )}
        </TouchableOpacity>
        {/* <Image source={require('../../../../assets/png/gallery.png')} style={{height:'100%',width:'100%'}}/> */}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        keyboardType="numeric"
        maxLength={10}
        value={formData.mobileNumber}
        onChangeText={(value) => handleInputChange('mobileNumber', value)}
      />

      <View style={{flexDirection:'row', width:'100%', height:50, marginBottom:15}}>
        <View style={[{width:'40%', height:50, alignItems:'center',backgroundColor:'#fff', borderRadius:8, marginBottom: 15, borderColor: '#DDD', borderWidth: 1,}]}>
          <Text style={{fontSize:18, flex:1, textAlignVertical:'center'}}>{formData.inComingDate}</Text>
        </View>
        <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={()=>showDatePicker()}>
        <Image source={require('../../../../assets/png/calendar.png')} style={{height:30,width:30, marginHorizontal:12,alignSelf:'center'}}/>
        </TouchableOpacity>
        <View style={{width:'40%', height:50, alignItems:'center', backgroundColor:'#fff',borderRadius:8, marginBottom: 15, borderColor: '#DDD', borderWidth: 1,}}>
          <Text style={{fontSize:18,flex:1,textAlignVertical:'center'}}>{formData.inComingTime}</Text>
        </View>
      </View>

      {/* <TextInput
        style={styles.input}
        placeholder="Type of vehicle"
        value={formData.vehicleType}
        onChangeText={(value) => handleInputChange('vehicleType', value)}
      /> */}

            <View style={styles.dropdownContainer}>
        {/* <Text style={styles.dropdownLabel}>Type of Vehicle</Text> */}
        <Picker
          selectedValue={formData.vehicleType}
          onValueChange={(value:any) => handleInputChange('vehicleType', value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Vehicle Type" value="" style={styles.option}/>
          <Picker.Item label="Two-Wheelers" value="Two-Wheelers" style={styles.option}/>
          <Picker.Item label="Four-Wheelers" value="Four-Wheelers" style={styles.option}/>
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Number plate"
        value={formData.numberPlate}
        onChangeText={(value) => handleInputChange('numberPlate', value)}
      />

      <View style={[styles.input,{flexDirection:'row', justifyContent:'space-evenly'}]}>
        <TouchableOpacity style={{ justifyContent:'center'}} onPress={()=>handleInputChange('numberOfPeople', String(Math.max((parseInt(formData.numberOfPeople || '0') - 1), 0)))}>
        <Image source={require('../../../../assets/png/minuss.png')} style={{height:29, width:29}}/>
        </TouchableOpacity>
      <TextInput
        style={{backgroundColor: '#FFF',paddingHorizontal: 15,}} // i wanna show placeholder when formData.numberOfPeople's value is 0
        placeholder="Number of people"
        keyboardType="numeric"
        value={formData.numberOfPeople === '0' || formData.numberOfPeople === 0 ? null : String(formData.numberOfPeople)}
        onChangeText={(value) => handleInputChange('numberOfPeople', value)}
      />
      <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>handleInputChange('numberOfPeople', String(Math.max((parseInt(formData.numberOfPeople || '0') + 1))))}>
      <Image source={require('../../../../assets/png/plus_icon.png')} style={{height:26, width:26, tintColor:'#000'}}/>
      </TouchableOpacity>
      </View>


    <View style={{height:36,backgroundColor:'#fff',borderRadius:8,justifyContent:'flex-start', width:'50%', marginBottom:12,borderColor:'#DDD', borderWidth:1}}>
      <Text style={{fontSize:21,textAlign:'center', fontStyle:'italic', flex:1,}}>Type of visitor</Text>
    </View>

      <View style={styles.tagContainer}>
        {['Family', 'Friend', 'Food Delivery', 'E-commerce delivery'].map((type) => (
          <TouchableOpacity
            key={type}
            style={
              formData.visitorType === type
                ? [styles.tag, styles.activeTag]
                : styles.tag
            }
            onPress={() => handleInputChange('visitorType', type)}
          >
            <Text
              style={
                formData.visitorType === type
                  ? styles.activeTagText
                  : styles.tagText
              }
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput style={[styles.input, styles.textArea]}
        placeholder="Purpose of visit"
        multiline
        value={formData.purpose}
        onChangeText={(value) => handleInputChange('purpose', value)}
      />

      <View style={styles.tagContainer}>
        {['Visiting', 'Delivery', 'Lorem'].map((purpose) => (
          <TouchableOpacity
            key={purpose}
            style={
              formData.purpose === purpose
                ? [styles.tag, styles.activeTag]
                : styles.tag
            }
            onPress={() => handleInputChange('purpose', purpose)}
          >
            <Text
              style={
                formData.purpose === purpose
                  ? styles.activeTagText
                  : styles.tagText
              }
            >
              {purpose}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() =>{
         console.log(formData);
         Toaster('Entry Generated Successfully.');
         navigation.goBack();
         }}>
        <Text style={styles.buttonText}>Generate an entry</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
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
    height:32,
    width:32,
  },
  option :{
    fontSize:15
  },
  overlayText: {
    fontSize: 19,
    color: 'green',
    fontWeight: 'bold',
    flex:1,
    textAlign:'center',
    justifyContent:'center',
    alignSelf:'center',
    textAlignVertical:'center',
    alignContent:'center',
    alignItems:'center'
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
    marginBottom:12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },  
  header: {
    backgroundColor: '#06B8C3',
    flexDirection:'row',
    height:50,
    width:'100%'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'normal',
  },
});

export default GenerateEntry;
