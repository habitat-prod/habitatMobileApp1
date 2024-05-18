import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './src/navigation/rootNavigation';
import { customTheme } from './src/config/customTheme';

const App: React.FC = (props) => {
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
