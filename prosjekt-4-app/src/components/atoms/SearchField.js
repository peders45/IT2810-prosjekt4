import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { searchForItem }  from "../../state/actions/searchActions";
import { connect } from 'react-redux'

//Input field and button for text search
const SearchField = ({ searchForItem }) => {
  const [ input, setInput ] = useState([]);
    
  return(
        <View>
          <TextInput
          placeholder="Search for menu items..."
          onChangeText={(text) => setInput(text)}
          />
          <Button onPress={() => searchForItem(input)} title="Search"/>
        </View>
    );
};

//Dispatching actions to the store
const mapDispatchToProps = {
  searchForItem
 };

//Connect the store to this component
export default connect(null, mapDispatchToProps)(SearchField)