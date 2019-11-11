import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RatingWrapper from '../molecules/RatingWrapper'


  const ResultDetailSection = (section) => {

    return (
      <View style={styles.content}>
        <View>
          <Text>Category: {section.Category}</Text>
          <Text>Calories: {section.Calories}cal</Text>
          <Text>Carbohydrates: {section.Carbohydrates}g</Text>
          <Text>Protein: {section.Protein}g</Text>
          <Text>Total fat: {section.Total_Fat}g</Text>
          <Text>Saturated fat: {section.Saturated_Fat}g</Text>
          <Text>Saturated fat {section.Saturated_Fat}g</Text>
          <Text>Sugars: {section.Sugars}g</Text>
        </View>
        <RatingWrapper menuId={section._id}/>
      </View>
    );
  };


export default ResultDetailSection;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    width: 300,
    backgroundColor: "#fff3b4",
    padding: 5
  },
  rating:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
  }
});