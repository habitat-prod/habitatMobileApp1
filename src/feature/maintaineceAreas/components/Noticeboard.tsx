import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { Alert, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NAVIGATION } from "../../../constants/screens";
import { HBStackParamList } from "src/navigation/rootNavigation";



export const Noticeboard = ({ item }: { item: any }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const defaultNavigation: StackNavigationProp<HBStackParamList> = useNavigation();
    const handleDotsPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleEdit = () => {
        setModalVisible(false);
        console.log("Edit option selected");
        defaultNavigation.navigate(NAVIGATION.AnnouncementScreenNav, { data: item });

    };

    const handleDelete = () => {
        setModalVisible(false);
        console.log("Delete option selected");
    };
    return <View style={styles.post}>
        <View style={styles.postHeader}>
            <View style={{ flexDirection: 'row', }}>
                <Image source={{ uri: item?.image }} style={styles.profileImage} />
                <View>
                    <Text style={styles.postAuthor}>{item?.name}</Text>
                    <Text style={styles.postLocation}>{item?.buildingName}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={(handleDotsPress)}>
                <Image source={require('../../../assets/png/dots.png')} style={{ marginEnd: 9, marginBottom: 15 }} />
            </TouchableOpacity>
        </View>
        <Text style={styles.postContent}>{item?.description}
        </Text>

        <Modal
            transparent={true}
            visible={isModalVisible}
            animationType="slide"
            onRequestClose={handleCloseModal}
        >
            <Pressable style={styles.modalOverlay} onPress={handleCloseModal} >
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.option} onPress={handleEdit}>
                        <Image source={require('../../../assets/png/edit.png')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={handleDelete}>
                        <Image source={require('../../../assets/png/delete.png')} style={styles.optionIcon} />
                        <Text style={styles.optionText}>Delete</Text>
                    </TouchableOpacity>
                </View></Pressable>
        </Modal>
    </View>
}
const styles = StyleSheet.create({
    post: {
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 12,
    },
    modalIcon: {
        height: 18,
        width: 18,

    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    postAuthor: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#000',
        marginStart: 9,
        marginTop: 6
    },
    postLocation: {
        fontSize: 12,
        color: "#06B8C3",
        marginStart: 9,
    },
    postContent: {
        fontSize: 14,
        color: "#333",
        marginBottom: 8,
    },
    postImage: {
        width: "100%",
        height: 170,
        borderRadius: 4,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 0.4,
        borderColor: 'grey',
        marginBottom: 10,
    },
    manualInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 12,
        // padding: 2,
        borderWidth: 0.2,
        borderColor: 'grey',
        borderRadius: 8,
        marginBottom: 12
    },

    modalContainer: {
        // flex:1,
        justifyContent: 'flex-start',
        marginHorizontal: 9,
        marginBottom: 0,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 130,
        width: '97%',
        alignSelf: 'center',
        paddingHorizontal: 12,
        elevation: 19,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        position: 'absolute',
        bottom: 0,
        // borderColor:'#06B8C3',
        // borderWidth:1,
        // elevation:9,
        // borderRadius:9,
        // alignItems:'center',
        // padding:9
        // flex:1
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#000',
        textAlign: 'left',
        marginBottom: 9,
        marginTop: 9,
        marginStart: 9,
    },
    addressOption: {
        height: 65,
        backgroundColor: '#ECECEC',
        marginTop: 9,
        marginStart: 8,
        marginEnd: 8,
        borderRadius: 5,
    },
    iconStyle: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    textInput: {
        marginLeft: 3,
        flex: 1,
        color: '#000',
        fontSize: 14,
    },
    txtSeeAll: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: 'blue',
        textAlign: 'center',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        marginBottom: 9,
        marginTop: 9,
        marginEnd: 9,
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.17)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // modalContainer: {
    //     backgroundColor: '#fff',
    //     padding: 16,
    //     borderRadius: 8,
    //     width: '80%',
    // },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        justifyContent: 'center',
        borderColor: '#06B8C3',
        borderWidth: 1,
        // width:90,
        backgroundColor: '#fff',
        borderRadius: 9,
        elevation: 9,
        marginTop: 9,

    },
    optionIcon: {
        width: 16,
        height: 16,
        marginRight: 12,
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },

})