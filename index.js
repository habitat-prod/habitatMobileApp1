/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootStore from './src/redux/store/configureStore';
import { Provider } from 'react-redux';

const ReduxApp = () => (
    <Provider store={RootStore}>
      <App/>
    </Provider>
  );

AppRegistry.registerComponent(appName, () => ReduxApp);
