import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { searchForItem }  from "../../state/actions/searchActions";
import { connect } from 'react-redux'

//Input field and button for text search
const SearchField = ({ searchForItem }) => {
  const [ input, setInput ] = useState([]);
    
  return(
        <View>
          <TextInput style={styles.text}
            placeholder="Search for menu items..."
            onChangeText={(text) => setInput(text)}
            returnKeyType='search'
            onSubmitEditing={() => searchForItem(input)}
          />
        </View>
    );
};

//Dispatching actions to the store
const mapDispatchToProps = {
  searchForItem
 };

//Connect the store to this component
export default connect(null, mapDispatchToProps)(SearchField)

//Styling
const styles = StyleSheet.create({
  text: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FF6A6A',
    borderRadius: 4,
    padding: 6,
  }
});