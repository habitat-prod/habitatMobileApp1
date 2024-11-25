import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Toaster } from '../../constants/common';
import { NAVIGATION } from '../../constants/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { HBStackParamList } from '../../navigation/rootNavigation';
import { useNavigation } from '@react-navigation/native';

const Setting: React.FC = () => {
  const theme = useTheme();

  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  const userName = 'Karan Gupta';
  const userImage = 'https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/437192839_460374373491729_8117494488611041816_n.jpg?ccb=11-4&oh=01_Q5AaILwJuKJtVGS_eeVV18Qpvx5rqSdhFm2W3VNjIVCWa18B&oe=674D2611&_nc_sid=5e03e0&_nc_cat=106';

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
        <SettingsOption title="Permanent Passes" onPress={() => console.log('Permanent Passes')} />
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
        <SettingsOption title="Logout" onPress={() => Toaster('Logged out successfully.')} />
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
});

export default Setting;
