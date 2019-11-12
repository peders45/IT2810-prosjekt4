import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RatingWrapper from '../molecules/RatingWrapper'

//Expanding section with information about each menu item and rating function. 
//Panel expands when header is pressed.
  const ResultDetailSection = (section) => {
    return (
      <View style={styles.content}>
        <View style={styles.info}>
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
    padding: 5,
  },
  rating:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
  },
  info: {
    marginVertical: 5, 
    marginLeft: 5,
    width: 150,
  }
});