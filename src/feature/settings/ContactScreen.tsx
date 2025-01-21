import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native"
import { callPerson } from "../../utils/calling";

interface ContactInfo {
  id: string;
  role: string;
  name: string;
  phone: string;
}

const ContactScreen: React.FC = () => {
    const navigation = useNavigation()
  const contactData: ContactInfo[] = [
    {
      id: "1",
      role: "Manager",
      name: "Shreyas Gore",
      phone: "9797721763",
    },
    {
      id: "3",
      role: "Manager",
      name: "Keshav Vyas",
      phone: "9166969436",
    },
    // {
    //   id: "4",
    //   role: "Manager",
    //   name: "Aman Shrivastava",
    //   phone: "7009713130",
    // },
  ];

  const renderContactItem = ({ item }: { item: ContactInfo }) => (
    <View style={styles.card}>
      
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{item.role}</Text>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.phone}</Text>
      </View>

    <TouchableOpacity onPress={()=> callPerson(item.phone.toString())}>
      <View style={styles.iconContainer}>
        <Image
          source={ require('../../assets/png/contact.png')}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header} >
        <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
            <Text style={styles.headerText}>Contact us</Text>
                </TouchableOpacity>
          </View>
          
      <View style = {{marginTop:-100,marginHorizontal:12, backgroundColor:'#fff',borderTopLeftRadius:12,borderTopRightRadius:12}}>
        
      <FlatList
        data={contactData}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        contentContainerStyle={styles.listContainer}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  listContainer: {
    marginTop: 12,
    elevation:12,
    marginHorizontal:12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical:6,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
});

export default ContactScreen;
