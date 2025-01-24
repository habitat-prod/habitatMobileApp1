import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from "react-native";

const AnnouncementScreen = ({route}) => {
  
    const navigation = useNavigation();
    const [announcement, setAnnouncement] = useState('');

    // useEffect(()=>{
    //   console.log(route.params?.data?.description);
    // },[announcement]);

    useEffect(()=>{
      setAnnouncement(route.params?.data?.description);
    },[])

    const handleSubmit = ()=> {

    }

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={{ flexDirection: "column" }}>
                <Image
                    source={route?.params?.image || require('../../assets/png/notice.png')}
                    style={styles.headerContainer}
                />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/png/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Announcements</Text>
            </View>

        {/* Ongoing Tasks Section */}
        <Text style={styles.ongoingTasksTitle}>Announcement for the society</Text>

        <View style={{ height: 160, width: '90%', borderColor: '#06B8C3', borderRadius: 9, marginBottom: 12, marginHorizontal: 13 }}>
          <TextInput
            style={{ fontSize: 16, backgroundColor: '#f0f0f0', flex: 1, }}
            placeholder="Write here"
            multiline={true}
            value={announcement}
            textAlignVertical="top"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setAnnouncement(text)}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            
            <Text style={{color:'#fff',fontSize:18}}>Post Announcement</Text>
            
        </TouchableOpacity>
        </View>
    );
};
// do create a seperate file for styles.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        height: 200,
        width:'100%',
        backgroundColor: "#06B8C3",
        alignItems: "center",
        justifyContent: "center",
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 10,
        padding: 10,
    },
    backArrow: {
        color: "#fff",
        height: 30,
        width: 30,
        position: 'absolute',
        left: 1,
        top: 1,
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "semibold",
        elevation: 9,
        shadowColor: '#000',
        backgroundColor: '#000',
        width: '42%',
        alignSelf: 'center',
        marginTop: -12,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 4,
    },
    createRequestButton: {
        backgroundColor: "#28a745",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    createRequestText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
    },
    ongoingTasksTitle: {
        fontSize: 18,
        fontWeight: "semibold",
        margin: 10,
        color: '#000'
    },
    taskListContainer: {
        paddingHorizontal: 10,
    },
    taskCard: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginBottom: 9,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff',
    },
    taskDescription: {
        fontSize: 14,
        marginVertical: 5,
        color: '#fff'
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoText: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subText: {
        fontSize: 14,
        color: "#888",
    },
    callButton: {
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection:'row',
        borderColor:'#000',
        borderWidth:0.5,
    },
    callStaff: {
        backgroundColor: "grey",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection:'row',
        borderColor:'#000',
        borderWidth:0.5,
    },
    callText: {
        color: "#000",
        fontSize: 14,
    },
    callStaffText: {
        color: "#fff",
        fontSize: 14,
    },
    submitButton: {
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor:'#06B8C3', 
      width:'80%',
      paddingVertical:3,
      marginHorizontal:12,
      alignItems:'center',
      alignSelf:'center',
    },
});

export default AnnouncementScreen;
