import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Image
} from "react-native";
import {useNavigation} from '@react-navigation/native'
import { NAVIGATION } from "../../constants/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { HBStackParamList } from "../../navigation/rootNavigation";

interface Member {
    id: string;
    name: string;
    phone: string;
    fileName: string;
    status: "Friends/Family" | "House Help";
  }

const PermanentPasses: React.FC = () => {

  const [activeTab, setActiveTab] = useState<"Friends/Family" | "House Help">("Friends/Family");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const defaultNavigation:StackNavigationProp<HBStackParamList> = useNavigation();
  
  const [friendsFamliy] = useState<Member[]>([
    {
      id: "1",
      name: "Sheetal",
      phone: "+91 9797721763",
      fileName: "Filename.pdf",
      status: "Friends/Family",
    },
    {
      id: "2",
      name: "Sarita",
      phone: "+91 7880718700",
      fileName: "Filename.pdf",
      status: "Friends/Family",
    },
  ]);

  const [HouseHelp] = useState<Member[]>([
    {
      id: "3",
      name: "Vimal",
      phone: "+91 7307990967",
      fileName: "Filename.pdf",
      status: "House Help",
    },
    {
      id: "4",
      name: "Vinay",
      phone: "+91 7307990967",
      fileName: "Filename.pdf",
      status: "House Help",
    },
    {
      id: "5",
      name: "Kanchana",
      phone: "+91 7307990967",
      fileName: "Filename.pdf",
      status: "House Help",
    },
  ]);


const renderPasses = ({ item }: { item: Member }) => (
    <View style={styles.card}>
      <View style={{width:'100%'}}>
            <Image source={require('../../assets/png/image_ticket.png')}/>
        <Text style={{color:'blue'}}>{item.name}</Text>
        <View style={{flexDirection:'row', marginBottom:5, marginTop:3}}>
        <Image source={require('../../assets/png/call.png')} style={{alignSelf:'center'}}/>
        <Text >{item.phone}</Text>
        </View>
        <View style={{backgroundColor:'grey',height:1,width:'100%'}}/>
        <View >
          <View style={{flexDirection:'row', alignSelf:'center'}}>
          <Text style={{marginTop:9}}>{item.fileName}</Text>
            {item.status === "Friends/Family" ? (
            <View style={{backgroundColor:'purple',borderRadius:4, marginHorizontal:3,paddingVertical:1, marginTop:9}}>
            <Text style={{color:'#fff',paddingHorizontal:5}}>Friends/Family</Text>
            </View>
          ) : (
            <View style={{backgroundColor:'brown',borderRadius:4, marginHorizontal:3,paddingVertical:1, marginTop:9}}>
            <Text style={{color:'#fff', paddingHorizontal:5}}>House Help</Text>
            </View>
          )}
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.menuDots}>⋮</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} >
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginStart:16, marginEnd:9,marginTop:-2}}>{'<'}</Text>
            <Text style={styles.headerText}>Permanent Passes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:16}} onPress={()=> defaultNavigation.navigate(NAVIGATION.AddPermanentPassNav)}>
            <Image style={{marginEnd:14}} source = {require('../../assets/png/plus_icon.png')}/>
          </TouchableOpacity>
          </View>

      {/* Tab Buttons */}
      <View style={{marginTop:-100, backgroundColor:'#fff',marginHorizontal:12,borderTopLeftRadius:12,borderTopRightRadius:12,}}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Friends/Family" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("Friends/Family")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Friends/Family" && styles.activeTabText,
            ]}
          >
            Friends/Family
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "House Help" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("House Help")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "House Help" && styles.activeTabText,
            ]}
          >
            House Help
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontSize:16,color:'grey',marginBottom:19, marginStart:16}}>Passes issued to your flat</Text>

      {/* passes List  */}
      <FlatList
        data={activeTab === "Friends/Family" ? friendsFamliy : HouseHelp}
        renderItem={renderPasses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookingList}
      />

    {/* Options Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      </View>
    </View>
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
    justifyContent:'space-between',
    height:200,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    paddingTop:34,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'normal',
  },
  backButton: {
    color: "#fff",
    fontSize: 21,
    marginRight: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
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
  tabs: {
    flexDirection: "row",
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#EAEAEA",
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
    paddingEnd:24,
    borderRadius: 8,
    marginBottom: 12,
  },
  activeTabButton: {
    backgroundColor: "#00A8E8",
  },
  tabText: {
    fontSize: 16,
    color: "#888",
  },
  activeTabText: {
    color: "#fff",
  },
  bookingList: {
    paddingHorizontal: 16,
  },
  bookingCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  spotBadge: {
    width: 40,
    height: 40,
    backgroundColor: "#00A8E8",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  spotText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookingTime: {
    fontSize: 14,
    color: "#888",
  },
  menuButton: {
    padding: 8,
  },
  menuDots: {
    fontSize: 18,
    color: "#888",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalButton: {
    width: "100%",
    padding: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  modalButtonText: {
    fontSize: 16,
    color: "#00A8E8",
  },
});

export default PermanentPasses;
