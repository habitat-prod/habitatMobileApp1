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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </PaperProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
