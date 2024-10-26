import { createEpicMiddleware } from 'redux-observable';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
  });

epicMiddleware.run(rootEpic);

export default store;