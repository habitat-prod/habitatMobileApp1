import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/rootNavigation';
import {customTheme} from './src/config/customTheme';
import store from './src/store/configureStore';

const App: React.FC = props => {
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
