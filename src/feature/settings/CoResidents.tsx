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
import { StackNavigationProp } from "@react-navigation/stack";
import { HBStackParamList } from "../../navigation/rootNavigation";
import { NAVIGATION } from "../../constants/screens";
// import { Image } from "react-native-svg";

interface Resident {
  id: string;
  type: string;
  name: string;
  phone: string;
  fileName: string;
  status: "Pending" | "Approved";
}

const CoResidents: React.FC = () => {
  const [residents] = useState<Resident[]>([
    {
      id: "1",
      type: "Co-owner",
      name: "Owner Name",
      phone: "+91 9797721763",
      fileName: "Filename.pdf",
      status: "Pending",
    },
    {
      id: "2",
      type: "Tenant",
      name: "Owner Name",
      phone: "+91 7880718700",
      fileName: "Filename.pdf",
      status: "Approved",
    },
    {
      id: "3",
      type: "Other Resident",
      name: "Owner Name",
      phone: "+91 7307990967",
      fileName: "Filename.pdf",
      status: "Approved",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();

  
  const renderResident = ({ item }: { item: Resident }) => (
    <View style={styles.card}>
      <View style={{width:'100%'}}>
        <Text style={styles.typeText}>{item.type}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.phoneText}>{item.phone}</Text>
        <View style={{backgroundColor:'grey',height:1,width:'100%'}}/>
        <View style={styles.fileRow}>
            <Image source={require('../../assets/png/file_icon.png')}/>
          <Text style={styles.fileName}>{item.fileName}</Text>
          <View
            style={
              styles.statusBadge
            //   item.status === "Pending" ? (<Image source={require('../../assets/png/pending_icon.png')}/>) : (<Image source={require('../../assets/png/approved_icon.png')}/>),
            }
          >
            {item.status === "Pending" ? (
            <Image source={require('../../assets/png/pending_icon.png')} />
          ) : (
            <Image source={require('../../assets/png/approved_icon.png')} />
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
        <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
            <Text style={styles.headerText}>Co-residents</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/png/filter_icon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={()=> defaultNavigation.navigate(NAVIGATION.AddCoResidentsNav)}>
            <Image style={{marginEnd:12}} source = {require('../../assets/png/plus_icon.png')}/>
          </TouchableOpacity>
        </View>
          </View>

        
      <View style={{marginTop:-100, backgroundColor:'#fff',marginHorizontal:12,borderTopLeftRadius:12,borderTopRightRadius:12,}}>
      
      <Text style={styles.subheading}>See your co-residents information</Text>


      <FlatList
        data={residents}
        renderItem={renderResident}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />


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
    justifyContent: "space-between",
    // elevation:-9,
    height:200,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
  },
  backButton: {
    color: "#fff",
    fontSize: 18,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    marginTop:34,
  },
  iconButton: {
    marginLeft: 16,
  },
  filterIcon: {
    color: "#fff",
    fontSize: 20,
  },
  addIcon: {
    color: "#fff",
    fontSize: 24,
  },
  subheading: {
    paddingHorizontal: 16,
    marginVertical: 8,
    fontSize: 16,
    color: "#888",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
    paddingEnd:24,
    borderRadius: 8,
    marginBottom: 12,
    // elevation: 5,
  },
  typeText: {
    fontSize: 14,
    color: "#888",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  fileRow: {
    flex:1,
    flexDirection: "row",
    marginTop:5,
    alignItems: "center",
  },
  fileName: {
    fontSize: 14,
    color: "#00A8E8",
    marginRight: 12,
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pendingBadge: {
    backgroundColor: "#E0E0E0",
  },
  approvedBadge: {
    backgroundColor: "#C8E6C9",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  pendingText: {
    color: "#888",
  },
  approvedText: {
    color: "#388E3C",
  },
  menuButton: {
    padding: 8,
    marginEnd:12,
    paddingEnd:12,
  },
  menuDots: {
    fontSize: 18,
    color: "#888",
    marginEnd:100,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'normal',
    marginTop:36,
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

export default CoResidents;
