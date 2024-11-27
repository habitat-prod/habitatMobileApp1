import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

const CustomBottom = ({ visible, onClose, flatDetailsList = [] }) => {
    // const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>

      <Modal isVisible={visible} style={{marginStart:12, marginEnd:12, marginBottom:0}} onBackButtonPress={()=>{onClose}}>
        <View style={{ 
            position: 'absolute', 
            bottom: 0,
            backgroundColor:'#fff',
            width:'100%',
            marginBottom:'0',
            paddingBottom:15,
            borderTopStartRadius:21,
            borderTopEndRadius:21,
            paddingHorizontal:12
            }}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.txtTitle}>
                    Select a saved address
                    </Text>
                    <Text style={styles.txtSeeAll}> See all</Text>
                </View>

          {flatDetailsList.map((flat, index) => (
            <TouchableOpacity
              key={index}
              style={styles.plane}
              onPress={onClose}
            >
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image
                  source={require('../../../../../src/assets/png/habitaticon.png')}
                  style={{ alignSelf: 'center', marginHorizontal: 5 }}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.txt}>{flat.flatName || 'Flat'}</Text>
                  <Text style={{ color: 'grey', fontSize: 14 }}>
                    {flat.flatAddress}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}


            {/* all these below data would be getting from the API as flatDetailsList apart from all image sources because they'll be static as they're now */}
            {/* <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image source={require("../../../../../src/assets/png/habitaticon.png")} style={{alignSelf:'center', marginHorizontal:5}}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image source={require("../../../../../src/assets/png/habitaticon.png")} style={{alignSelf:'center', marginHorizontal:5}}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Image source={require("../../../../../src/assets/png/habitaticon.png")} style={{alignSelf:'center', marginHorizontal:5}}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
                <View style={{flexDirection:'row', alignSelf:'center', marginTop:5}}>
                    <Image source={require("../../../../../src/assets/png/habitaticon.png")} style={{alignSelf:'center',marginHorizontal:5}}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.txt}>Home</Text>
                    <Text style = {{color:'grey', fontSize:14, }}>
                    House Number 4, First Floor, Khatipura, Jaipur
                    </Text>
                    </View>
                </View>
            </TouchableOpacity> */}

            <View style={{flexDirection:'row', marginStart:12}}>
                <Image source={require('../../../../../src/assets/png/icon_search.png')} style={{width:32,height:32,alignSelf:'center'}}/>
            <TextInput style={styles.textInput} placeholder='Select Location Mannually'/>

            </View>
            {/* <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
               <Text style={styles.txt}>flat #02</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
               <Text style={styles.txt}>flat #03</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plane} onPress={()=>{setVisible(false)}}>
               <Text style={styles.txt}>flat #04</Text>
            </TouchableOpacity> */}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#000',
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    color:'#000',
    fontSize:17
  },
  txtWhite:{
    color:'#fff',
    fontSize:26
  },
  txt2:{
    color:'#000',
    fontSize:25
  },
  plane:{
    // width:'90%',
    height:65,
    backgroundColor:'#ECECEC',
    marginTop:9,
    marginStart:12,
    marginEnd:12,
    borderRadius:5,
    alignItems:'center',
  },
  txtTitle:{
    fontSize:22,
    fontWeight:'semibold',
    color:'#000', 
    textAlign:'start', 
    marginBottom:9, 
    marginTop:9,
    marginStart:3,
  },
  txtSeeAll:{
    fontSize:20,
    fontWeight:'semibold',
    color:'blue', 
    textAlign:'end',
    alignItems:'flex-end',
    alignContent:'flex-end',
    alignSelf:'flex-end',
    marginBottom:9, 
    marginTop:9,
    marginEnd:9,
  },
  textInput:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000',
    marginStart:6,
    width:'100%'
  }

})

export default CustomBottom
