import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
  Modal
} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Toaster } from '../../../../../src/utils/common';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateEntry } from '../../action/generateEntryAction';

const GenerateEntry = () => {

  const dispatch = useDispatch();

  const [people,setPeople] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    towerNumber: '',
    flatId: '',
    vehicleType: '',
    numberPlate: '',
    numberOfPeople: `${people}`,
    visitorType: '',
    purpose: '',
    inComingDate: 'dd/mm/yyyy',
    inComingTime: 'HH-MM AM',
  });

  const [imageUri, setImageUri] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleGenerateEntry = () => {
    if(!formData.name || !formData.mobileNumber || formData.numberOfPeople==0 || !formData.visitorType || !formData.purpose || formData.inComingDate.startsWith('dd') || formData.inComingTime.startsWith('hh') || !formData.vehicleType){
      Toaster('please enter necessary feilds to generate entry!');
    }
    else{
      handleIORequest();
    setModalVisible(true); 
    setTimeout(() => {
      setModalVisible(false); 
      // navigation.goBack();
    }, 3000);
  }
  };

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
    console.log(Number(x1[2])+'/'+x1[1]+'/'+x1[0]);
    Toaster(`date has been picked: ${x1}`);
    handleInputChange('inComingDate',Number(x1[2])+1+'/'+x1[1]+'/'+x1[0]);
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

  useEffect(()=>{
    const addFlatId = async()=>{
      const flatId = await AsyncStorage.getItem('flatId');
      handleInputChange('flatId',flatId);
    }
    addFlatId();
  }, []);

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

  const handleIORequest = async()=>{
    const response = await dispatch(generateEntry(
      {
        flatId: Number(formData.flatId),
        type: formData.visitorType,
        role: 'GUEST'
      }
    ));
    console.log(`Response inSide screen is: ${JSON.stringify(response)}`);
  }

  return (
    <SafeAreaView style={{flex:1}}>
      {/* // dialog to show GIF */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.gifContainer}>

            <FastImage
              style={styles.gif}
              source={require('../../../../assets/gif/entryGenrated.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.modalText}>Entry Generated Successfully!</Text>
          </View>
        </View>
      </Modal>

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
        <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={()=>showDatePicker()}>
        <Image source={require('../../../../assets/png/calendar.png')} style={{height:24,width:24, marginHorizontal:4,alignSelf:'center'}}/>
        </TouchableOpacity>
        
        <View style={[{width:'35%', height:50, alignItems:'center',backgroundColor:'#fff', borderRadius:8, marginBottom: 15, borderColor: '#DDD', borderWidth: 1,}]}>
          <TouchableOpacity onPress={()=>showDatePicker()}>
          <Text style={{fontSize:16, flex:1, textAlignVertical:'center'}}>{formData.inComingDate}</Text>
        </TouchableOpacity>
          </View>
        <TouchableOpacity style={{flex:1, justifyContent:'center'}} onPress={()=>showTimePicker()}>
        <Image source={require('../../../../assets/png/clock.png')} style={{height:27,width:27, marginHorizontal:4,alignSelf:'center'}}/>
        </TouchableOpacity>
        <View style={{width:'35%', height:50, alignItems:'center', backgroundColor:'#fff',borderRadius:8, marginBottom: 15, borderColor: '#DDD', borderWidth: 1,}}>
          <TouchableOpacity onPress={()=> showTimePicker()}>
          <Text style={{fontSize:15,flex:1,textAlignVertical:'center'}}>{formData.inComingTime}</Text>
          </TouchableOpacity>
        </View>
      </View>

            <View style={styles.dropdownContainer}>
              
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

      <View style={[styles.input,{flexDirection:'row', justifyContent:'space-around'}]}>
        <Text style={{fontSize:14, color:'grey',alignSelf:'center', marginEnd:12}}>
          Number of people
        </Text>
        <TouchableOpacity style={{ justifyContent:'center'}} onPress={()=>handleInputChange('numberOfPeople', String(Math.max((parseInt(formData.numberOfPeople || '0') - 1), 0)))}>
        <Image source={require('../../../../assets/png/minuss.png')} style={{height:24, width:24, tintColor:'#000'}}/>
        </TouchableOpacity>
      <TextInput
        style={{backgroundColor: '#FFF',paddingHorizontal: 15,}}
        placeholder="0"
        keyboardType="numeric"
        value={formData.numberOfPeople === '0' || formData.numberOfPeople === 0 ? null : String(formData.numberOfPeople)}
        onChangeText={(value) => handleInputChange('numberOfPeople', value)}
      />
      <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>handleInputChange('numberOfPeople', String(Math.max((parseInt(formData.numberOfPeople || '0') + 1))))}>
      <Image source={require('../../../../assets/png/plus_icon.png')} style={{height:20, width:20, tintColor:'#000'}}/>
      </TouchableOpacity>
      </View>

      
<TextInput style={[styles.input, styles.textArea]}
        placeholder="Type of visitor"
        multiline
        value={formData.visitorType}
        onChangeText={(value) => handleInputChange('visitorType', value)}
      />
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}>

      <View style={[styles.tagContainer, {flexDirection:'row',}]}>
        {['Family', 'Friend', 'Food Delivery', 'E-commerce delivery', 'other'].map((visitorType) => (
          <TouchableOpacity
            key={visitorType}
            style={
              formData.visitorType === visitorType
                ? [styles.tag, styles.activeTag]
                : styles.tag
            }
            onPress={() => handleInputChange('visitorType', visitorType)}
          >
            <Text
              style={
                formData.visitorType === visitorType
                  ? styles.activeTagText
                  : styles.tagText
              }
            >
              {visitorType}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>

      <TextInput style={[styles.input, styles.textArea]}
        placeholder="Purpose of visit"
        multiline
        value={formData.purpose}
        onChangeText={(value) => handleInputChange('purpose', value)}
      />
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      >
      <View style={styles.tagContainer}>
        {['Visiting', 'Delivery','for Fun', 'other'].map((purpose) => (
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
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() =>{
         console.log(formData);
        //  Toaster('Entry Generated Successfully.');
        //  navigation.goBack();
        handleGenerateEntry();
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
});

export default GenerateEntry;
