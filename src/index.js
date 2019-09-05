import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/Reactotron';

import Routes from './routes';
import store from './store/index';
import { setNavigator } from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
      <Routes ref={nav => setNavigator(nav)} />
    </Provider>
  );
}
