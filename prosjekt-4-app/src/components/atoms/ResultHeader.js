import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.text} numberOfLines={1} >{section.Item}</Text>
        <Text >{Math.floor(section.score)} ⭐</Text>
      </View>
    );
  };


export default ResultHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-evenly",
    padding: "5px",
    marginTop: "1vh",
    width: "90vw",
    height: "6vh",
    backgroundColor: "#ffe836",
  },
  text: {
    width:"60vw"
  }
});

