import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import {useNavigation} from '@react-navigation/native'
// import { Image } from "react-native-svg";

const ActiveBookings: React.FC = () => {

  const [activeTab, setActiveTab] = useState<"Today" | "Upcoming">("Today");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  
  const todayBookings = [
    { id: "1", spot: "A01", time: "10:00 AM - 10:30 AM" },
    { id: "2", spot: "A01", time: "1:00 PM - 2:30 AM" },
  ];

  const upcomingBookings = [
    { id: "3", spot: "A01", time: "10:00 AM - 10:30 AM" },
    { id: "4", spot: "A01", time: "1:00 PM - 2:30 AM" },
    { id: "5", spot: "A01", time: "1:00 PM - 2:30 AM" },
  ];

  // Renders each booking card
  const renderBooking = ({
    item,
  }: {
    item: { id: string; spot: string; time: string };
  }) => (
    <View style={styles.bookingCard}>
      <View style={styles.cardLeft}>
        <View style={styles.spotBadge}>
          <Text style={styles.spotText}>{item.spot}</Text>
        </View>
      {/* <View style={styles.iconContainer}>
        <Image
          source={ require('../../assets/png/payment_dues_icon.png')}
          style={styles.icon}
        />
      </View> */}
        <View>
          <Text style={styles.bookingTitle}>Parking Spot</Text>
          <Text style={styles.bookingTime}>{item.time}</Text>
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
            <Text style={styles.headerText}>Active bookings</Text>
                </TouchableOpacity>
          </View>
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Active bookings</Text>
      </View> */}

      {/* Tab Buttons */}
      <View style={{marginTop:-100, backgroundColor:'#fff',marginHorizontal:12,borderTopLeftRadius:12,borderTopRightRadius:12,}}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Today" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("Today")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Today" && styles.activeTabText,
            ]}
          >
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Upcoming" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("Upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Upcoming" && styles.activeTabText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
      </View>

    {/* Booking List */}
      <FlatList
        data={activeTab === "Today" ? todayBookings : upcomingBookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookingList}
      />

    {/* Options Modal */}
      <Modal
        animationType="slide"
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
    // elevation: 3,
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

export default ActiveBookings;
