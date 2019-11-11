import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-elements';

//Section for expanded view with details about menu item.
  const ResultDetailSection = (section, { setRating }) => {

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
        <View style={styles.rating}>
          <Text>Your Rating: </Text>
          <AirbnbRating
            count={5}
            showRating={false}
            onFinishRating={setRating}
            defaultRating={0}
            size={15}
            onFinishRating={setRating}
          />
        </View>
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