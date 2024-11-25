import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler";

const TermsConditions: React.FC = () => {
    const navigation = useNavigation();

    const rules = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <ScrollView>
        
    <SafeAreaView style={styles.container}>
        <View style={styles.header} >
        <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
            <Text style={styles.headerText}>Terms & Conditions</Text>
                </TouchableOpacity>
          </View>
      <View style = {{marginTop:-100,marginHorizontal:12, backgroundColor:'#fff',borderTopLeftRadius:12,borderTopRightRadius:12}}>

        <Text style={styles.subheading}>RWA Rules</Text>

        <Text style={{fontSize:14, color:'#000',marginStart:13, marginEnd:9}}>{rules}</Text>
        <Text style={styles.subheading}>Terms & Conditions</Text>
        <Text style={{fontSize:14, color:'#000',marginStart:13, marginEnd:9, marginBottom:12}}>{rules} {rules}</Text>
      </View>
    </SafeAreaView>
    </ScrollView>
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
  subheading: {
    paddingHorizontal: 13,
    marginBottom: 8,
    marginTop: 12,
    fontSize: 16,
    color: "#888",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default TermsConditions;
