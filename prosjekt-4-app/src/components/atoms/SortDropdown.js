import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { sortResult }  from "../../state/actions/sortingActions";
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

//Drop down menu for selection of value to sort results on. Placed in side menu.
const SortingDropDown = ({ sortResult }) => { 
    const [ selectedValue, setSelectedValue ] = useState();

    useEffect(() => {
        sortResult(selectedValue)
      });

    return(
    <View style={styles.dropdownView}>
        <RNPickerSelect 
            value={selectedValue}
            onValueChange={(value) => setSelectedValue(value)}
            placeholder={{label: 'Sort by..', value: ''}}
            items={[
                { label: 'Calories (high-low)', value: 'Calories_HL', key: '1', },
                { label: 'Calories (low-high)', value: 'Calories_LH', key: '2', },
                { label: 'Ratings (high-low)', value: 'score_HL', key: '3', },
                { label: 'Ratings (low-high)', value: 'score_LH', key: '4', },
            ]}
        />
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
