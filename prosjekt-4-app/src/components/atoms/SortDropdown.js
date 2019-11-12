import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { sortResult }  from "../../state/actions/sortingActions";
import { View, StyleSheet, Picker } from 'react-native';

//Drop down menu for selection of value to sort results on. Placed in side menu.
const SortingDropDown = ({ sortResult }) => { 
    const [ selectedValue, setSelectedValue ] = useState();

    useEffect(() => {
        sortResult(selectedValue)
      });

    return(
    <View style={styles.dropdownView}>
        <Picker style={styles.dropdownItem}
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Sort by:" value=""/>
            <Picker.Item label="Calories (high-low)" value="Calories_HL" />
            <Picker.Item label="Calories (low-high)" value="Calories_LH" />
            <Picker.Item label="Ratings (high-low)" value="score_HL" />
            <Picker.Item label="Ratings (low-high)" value="score_LH" />
        </Picker>
    </View>
    );
  };

//Dispatching actions to the store
const mapDispatchToProps = {
  sortResult
 };

//Connect the store to this component
export default connect(null, mapDispatchToProps)(SortingDropDown)

//Styling
const styles = StyleSheet.create({
  dropdownItem: {
    color: '#43484D',
  },
  dropdownView: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FF6A6A',
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 2,
  },
});
