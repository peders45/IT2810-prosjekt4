import React, { useState } from 'react';
import { checkCategory, uncheckCategory }  from "../../state/actions/categoryActions";
import { connect } from 'react-redux'
import { searchForItem }  from "../../state/actions/searchActions";
import { CheckBox } from 'react-native-elements'
import { Button, TextInput, View } from 'react-native';

//Checkboxes to select categories of menu items, uses two actions for checking and unchecking,
//as well as one for updating the searchresults
const CategoryCheckbox = ({ categoryShown, categoryQuery, checkCategory, uncheckCategory, searchForItem, searchWord }) => {
    const [ checked, setChecked ] = useState(false);
    
    const handleChange = () => {
        setChecked(!checked)
        console.log(checked)
        if(checked) {
            uncheckCategory(categoryQuery);
        } else {
            checkCategory(categoryQuery);
        }
        searchForItem(searchWord)
  };
    return(
      <View>
        <CheckBox
        title={categoryShown}
        checked={checked}
        onPress={() => handleChange()}
        />
      </View>
    );
};

//Dispatching actions to the store
const mapDispatchToProps = {
  checkCategory,
  uncheckCategory,
  searchForItem
 };

//Extract data from the store
const mapStateToProps = (state) => ({
  searchWord: state.searchWord
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckbox)