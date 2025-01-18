import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BootstrapNavigationScreens, NAVIGATION } from './../constants/screens';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Delay navigation by 2 seconds
    const timer = setTimeout(async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          console.log('Navigating to Login screen without the token...');
          navigation.navigate(BootstrapNavigationScreens.Login); // Replace ensures no back to splash
          return;
        }
        console.log('Navigating to Home screen with the token...');
        navigation.replace(NAVIGATION.HomeScreenNav);
      } catch (error) {
        console.error('Error retrieving token:', error);
        navigation.replace(BootstrapNavigationScreens.Login);
      }
    }, 2000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center'}}>
      <Image source={require('../assets/png/habitat.jpeg')} style={{position:'absolute',top:'43%', height:100, width:120}}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
