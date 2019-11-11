import React from 'react';
import CategoryCheckbox from '../atoms/CategoryCheckbox'
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
import { connect } from 'react-redux'
import { searchForItem }  from "../../state/actions/searchActions";

//Section for category checkboxes
const CategorySection = ({ searchForItem, searchWord }) => {
  return(
    <View style={styles.view}>
      <Text style={styles.heading}>Choose categories</Text>
      <CategoryCheckbox categoryShown="Breakfast" categoryQuery="Breakfast" />
      <CategoryCheckbox categoryShown="Beef & pork" categoryQuery="Beef_&_Pork" />
      <CategoryCheckbox categoryShown="Chicken & fish" categoryQuery="Chicken_&_Fish" />
      <CategoryCheckbox categoryShown="Snacks & sides" categoryQuery="Snacks_&_Sides" />
      <CategoryCheckbox categoryShown="Salads" categoryQuery="Salads" />
      <CategoryCheckbox categoryShown="Beverages" categoryQuery="Beverages" />
      <CategoryCheckbox categoryShown="Desserts" categoryQuery="Desserts" />
      <CategoryCheckbox categoryShown="Coffee & tea" categoryQuery="Coffee_&_Tea" />
      <CategoryCheckbox categoryShown="Smoothies & shakes" categoryQuery="Smoothies_&_Shakes" />
      <TouchableOpacity onPress={() => searchForItem(searchWord)} style={styles.button}>
          <Text style={styles.buttonText}>Filter</Text>
      </TouchableOpacity>
    </View>
  )
}

//Dispatching actions to the store
const mapDispatchToProps = {
  searchForItem
 };

 //Extract data from the store
const mapStateToProps = (state) => ({
  searchWord: state.searchWord
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(CategorySection)

//Styling
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#ffe836',
    padding: 10,
    marginTop:-5,
    paddingTop: 30,
  },
  heading: {
    fontSize: 18,
    color: '#43484D',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    paddingBottom: 4
  },
  button: {
    backgroundColor: '#FF6A6A',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#43484D'
  },
});