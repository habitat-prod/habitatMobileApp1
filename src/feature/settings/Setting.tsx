import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, BackHandler, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Toaster } from '../../constants/common';
import { BootstrapNavigationScreens, NAVIGATION } from '../../constants/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { HBStackParamList } from '../../navigation/rootNavigation';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting: React.FC = () => {
  const theme = useTheme();

  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const [userName,setUserName] = useState('Karan Gupta');
  let userImage = 'https://instagram.fknu1-4.fna.fbcdn.net/v/t51.2885-19/431802314_1890866504709275_3040778590036686043_n.jpg?_nc_ht=instagram.fknu1-4.fna.fbcdn.net&_nc_cat=111&_nc_ohc=qBOh77eMxQcQ7kNvgEyB24r&_nc_gid=aa426296eaeb42248126d8dae6b2e9ba&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYAEwaFegtSjaZQl1-jAx8NdcYHV0B851T8Fhw2yBEqhHQ&oe=67564E61&_nc_sid=22de04';

  useEffect(()=>{
    const fecthuserDetails = async () =>{
    console.log('==========================fetching the username===========================');
    const name = await AsyncStorage.getItem('userName');
    // const image = await AsyncStorage.getItem('userImage');
    setUserName(String(name));
    console.log(`username is ${name} and ${userName}`);
    // console.log(`userImage is ${userImage}`);
  }
  fecthuserDetails();
  },[]);

  const openLogout = () => (
    // <View style={styles.modal}>
    //   <View style={styles.body}>
    //     <Text>Are you really wants to Logout ?</Text>
    //     <View style={{marginTop:12, alignContent:'space-between', flexDirection:'row'}}>
    //       <TouchableOpacity onPress={()=>{setShow(false)}}>
    //         <Text style={{color:'red'}}>No</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={()=> setShow(false)}>
    //         <Text style={{color:'blue'}}>yes</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
    Alert.alert("Logout","Are you sure you want to Logout?",[
    {
      text: 'Cancel',onPress: ()=> {Toaster('logging out cancelled.')}
    },
    {
      text:'OK', onPress: async()=> {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userName');
        await AsyncStorage.removeItem('flatNo');
        await AsyncStorage.removeItem('buildingName');
        await AsyncStorage.removeItem('societyName');
        await AsyncStorage.removeItem('societyAddress');
        await AsyncStorage.removeItem('societyId');

        defaultNavigation.navigate(BootstrapNavigationScreens.Login);
        Toaster('logged out successfully.');
      }
    },
  ])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
        
      <View style={styles.header} >

      <Image source={require('../../assets/png/setting.png')}
                  style={{ marginStart: 16, marginEnd:9, marginTop:36 }}
                />
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style = {styles.settingItemCard}>

      <View style={styles.profileContainer}>
        <Image source={{ uri: userImage }} style={styles.profileImage} />
        <Text style={styles.profileName}>{userName}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <SettingsOption title="Edit profile" onPress={() => defaultNavigation.navigate(NAVIGATION.EditProfileNav)} />
        <SettingsOption title="Payment Dues" onPress={() => defaultNavigation.navigate(NAVIGATION.PaymentDuesScreenNav)} />
        <SettingsOption
          title="Add a payment method"
          onPress={() => console.log('Add payment method')}
          icon="+"
        />
        <SettingsOption title="Permanent Passes" onPress={() => defaultNavigation.navigate(NAVIGATION.PermanentPassesNav)} />
        <SettingsOption title="Active Bookings" onPress={() => defaultNavigation.navigate(NAVIGATION.ActiveBookingsNav)} />
        <SettingsOption
          title="Co-Residents"
          onPress={() => defaultNavigation.navigate(NAVIGATION.CoResidentsNav)}
        />
        <SettingsOption title="Feedback" onPress={() => defaultNavigation.navigate(NAVIGATION.FeedbackScreenNav)} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>More</Text>
        <SettingsOption title="About us" onPress={() => console.log('About us')} />
        <SettingsOption title="Privacy policy" onPress={() => console.log('Privacy policy')} />
        <SettingsOption
          title="Terms and conditions"
          onPress={() => defaultNavigation.navigate(NAVIGATION.TermsConditionsNav)}
        />
        <SettingsOption title="Contact us" onPress={() => defaultNavigation.navigate(NAVIGATION.ContactScreenNav)} />
        <SettingsOption title="Logout" onPress={() => {
          openLogout();
          }} />
      </View>
      </View>
    </ScrollView>
  );
};

interface SettingsOptionProps {
  title: string;
  onPress: () => void;
  icon?: string;
}

const SettingsOption: React.FC<SettingsOptionProps> = ({ title, onPress, icon }) => (
  <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
    <Text style={styles.optionText}>{title}</Text>
    {icon ? <Text style={styles.optionIcon}>{icon}</Text> : <Text style={styles.arrow}>{'>'}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
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
    fontWeight: 'bold',
    marginTop:36,
  },
  profileContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    marginTop: 8,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection:'row',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
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
  profileName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginStart:9,
    alignSelf:'center',
    textAlignVertical:'center',
    alignContent:'center',
    alignItems:'center',
  },
  section: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionIcon: {
    fontSize: 20,
    color: 'grey',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
  modal: {
    flex:1,
    backgroundColor:'rgba(50,50,50,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },
  body: {
    backgroundColor:'#fff',
    width:250,
    height:200,
    borderRadius:4,
    borderColor:'#06B8C3',
    justifyContent:'space-evenly',
    padding:30,
  }
});

export default Setting;
