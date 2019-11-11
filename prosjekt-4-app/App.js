import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import MainView from './src/components/organisms/MainView';

export default function App() {
  return (
    <Provider store={store}>
      <MainView/>
    </Provider>
  );
}
