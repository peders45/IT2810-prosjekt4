import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.text} numberOfLines={1} >{section.Item}</Text>
        <Text style={styles.score} >{Math.round((section.score)*10)/10} ★</Text>
      </View>
    );
  };


export default ResultHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-evenly",
    padding: 5,
    marginTop: 6,
    width: 300,
    height: 40,
    backgroundColor: "#ffe836",
  },
  text: {
    paddingTop: 6,
    width:250
  },
  score: {
    paddingTop: 5
  }
});

