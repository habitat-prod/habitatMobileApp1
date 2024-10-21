import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './src/navigation/rootNavigation';
import { customTheme } from './src/config/customTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = (props) => {
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
