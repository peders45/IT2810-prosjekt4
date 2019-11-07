import React from 'react';
import CategoryCheckbox from '../atoms/CategoryCheckbox'
import { View } from 'react-native';

//Section for category checkboxes
const CategorySection = () => {
  return(
    <View>
      <CategoryCheckbox categoryShown="Breakfast" categoryQuery="Breakfast" />
      <CategoryCheckbox categoryShown="Beef & pork" categoryQuery="Beef_&_Pork" />
      <CategoryCheckbox categoryShown="Chicken & fish" categoryQuery="Chicken_&_Fish" />
      <CategoryCheckbox categoryShown="Snacks & sides" categoryQuery="Snacks_&_Sides" />
      <CategoryCheckbox categoryShown="Salads" categoryQuery="Salads" />
      <CategoryCheckbox categoryShown="Beverages" categoryQuery="Beverages" />
      <CategoryCheckbox categoryShown="Desserts" categoryQuery="Desserts" />
      <CategoryCheckbox categoryShown="Coffee & tea" categoryQuery="Coffee_&_Tea" />
      <CategoryCheckbox categoryShown="Smoothies & shakes" categoryQuery="Smoothies_&_Shakes" />
    </View>
  )
}

export default CategorySection;