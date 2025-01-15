import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './src/navigation/rootNavigation';
import { customTheme } from './src/config/customTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { onMessageListener, requestUserPermission } from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { NotificationServices, requestUserPermission } from './src/firebase/PushNotifications';


const App: React.FC = (props) => {

//   useEffect(() => {
//     // Request notification permissions and get the token
//     requestUserPermission();

//     // Listen for foreground messages
//     const unsubscribe = onMessageListener;

//     return unsubscribe; // Unsubscribe from the listener on unmount
// }, []);

useEffect(()=>{
  requestUserPermission();
  NotificationServices();
},[]);

  return (
    <GestureHandlerRootView>
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
