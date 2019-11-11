import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideModal from './src/components/molecules/SideModal';

export default function App() {
  return (
    <View style={styles.container}>
      <SideModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
