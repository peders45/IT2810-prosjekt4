import React, { useState, useEffect } from 'react';
import { checkCategory, uncheckCategory }  from "../../state/actions/categoryActions";
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements'
import { View, StyleSheet } from 'react-native';

//Checkboxes to select categories of menu items, uses two actions for checking and unchecking,
//as well as one for updating the searchresults
const CategoryCheckbox = ({ categoryShown, categoryQuery, checkCategory, uncheckCategory }) => {
    const [ checked, setChecked ] = useState(false);
    
    useEffect(() => {
      if(checked) {
        checkCategory(categoryQuery);
      } else {
        uncheckCategory(categoryQuery);
      }
    });

    return(
      <View>
        <CheckBox
        title={categoryShown}
        checked={checked}
        onPress={() => setChecked(!checked)}
        size={24}
        checkedColor={'#FF6A6A'}
        uncheckedColor={'#43484D'}
        containerStyle={styles.checkbox}
        />
      </View>
    );
};

//Dispatching actions to the store
const mapDispatchToProps = {
  checkCategory,
  uncheckCategory
 };

//Connect the store to this component
export default connect(null, mapDispatchToProps)(CategoryCheckbox)

//Styling
const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: '#ffe836',
    borderWidth: 0,
    padding: 0,
  }
});