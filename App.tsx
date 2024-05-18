import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './src/navigation/rootNavigation';

const App: React.FC = (props) => {
  return (
      <PaperProvider>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </PaperProvider>
  );
};

export default App;
