import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './src/navigation/rootNavigation';
import { customTheme } from './src/config/customTheme';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = (props) => {
  useEffect(() => {  
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
