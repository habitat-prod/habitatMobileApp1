import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux';
import messaging from '@react-native-firebase/messaging';

// // Register background handler
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//     console.log('Message handled in the background!', remoteMessage);
// });

//foreground handler
messaging().onMessage(async remoteMessage => {
  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
});
//background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const ReduxApp = () => (
    <Provider store={RootStore}>
      <App/>
    </Provider>
  );

AppRegistry.registerComponent(appName, () => ReduxApp);