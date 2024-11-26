import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { Toaster } from "../../constants/common";

const FeedbackScreen: React.FC = () => {
    const navigation = useNavigation();
    const [selectedOption,setSelectedOption] = useState<String | null>(null);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () =>{
        if(!selectedOption || !feedback) {
            Alert.alert("please provide your feedback with quality to submit!");
            Toaster(`selected quality of service: ${selectedOption}`)
            return;
        }
        Toaster("feedback submitted.");
        navigation.goBack();
    }

  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
        
    <SafeAreaView style={styles.container}>
        <View style={styles.header} >
        <TouchableOpacity style={styles.header} onPress={()=> navigation.goBack()}>
        <Text style={{fontSize:24, fontWeight:'normal',color:'white', marginTop:34, marginStart:16, marginEnd:9}}>{'<'}</Text>
            <Text style={styles.headerText}>Feedback</Text>
                </TouchableOpacity>
          </View>
      <View style = {{marginTop:-100,marginHorizontal:12, backgroundColor:'#fff',borderTopLeftRadius:12,borderTopRightRadius:12, borderRadius:12, elevation:1, marginBottom:9, paddingBottom:21}}>

        <Text style={styles.subheading}>Please fill the feedback form</Text>

<Text style={styles.questionText}>How did you find our quality of service?</Text>

{/* Radio Buttons */}
{['Very Good', 'Good', 'Poor'].map((option) => (
  <TouchableOpacity
    key={option}
    style={styles.radioContainer}
    onPress={() => {setSelectedOption(option)}}
  >
    <View
      style={[
        styles.radioCircle,
        selectedOption === option && styles.radioSelected,
      ]}
    />
    <Text style={styles.radioLabel}>{option}</Text>
  </TouchableOpacity>
))}

<View style={{height:120, width:'90%', borderColor:'#06B8C3',borderWidth:1,borderRadius:5, marginBottom:12, marginHorizontal:13}}>
      <TextInput
        style={{fontSize:16, backgroundColor:'#fff', flex:1,}}
        placeholder="Write your feedback here"
        multiline={true}
        textAlignVertical="top"
        underlineColorAndroid="transparent"
        onChangeText={(text)=> setFeedback(text)}
      />
    </View>

{/* Submit Button */}
<TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
    
    <Text style={{color:'#fff',fontSize:18}}>Send Feedback</Text>
    
</TouchableOpacity>


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
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginVertical: 10,
    paddingHorizontal:13
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4c669f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    backgroundColor: '#4c669f',
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333333',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal:13
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

export default FeedbackScreen;
