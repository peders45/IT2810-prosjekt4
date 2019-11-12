import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RatingWrapper from '../molecules/RatingWrapper'


  const ResultDetailSection = (section) => {

    return (
      <View style={styles.content}>
        <View style={styles.text} >
          <Text numberOfLines={1}>Category: {section.Category}</Text>
          <Text numberOfLines={1}>Calories: {section.Calories}cal</Text>
          <Text numberOfLines={1}>Carbohydrates: {section.Carbohydrates}g</Text>
          <Text numberOfLines={1}>Protein: {section.Protein}g</Text>
          <Text numberOfLines={1}>Total fat: {section.Total_Fat}g</Text>
          <Text numberOfLines={1}>Saturated fat: {section.Saturated_Fat}g</Text>
          <Text numberOfLines={1}>Saturated fat {section.Saturated_Fat}g</Text>
          <Text numberOfLines={1}>Sugars: {section.Sugars}g</Text>
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
  text: {
    width: 150 
  },
  rating:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
  }
});