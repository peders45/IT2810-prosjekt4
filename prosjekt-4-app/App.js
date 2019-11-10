import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import CustomHeader from './src/components/molecules/CustomHeader';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CustomHeader/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6A6A",
  },
});
