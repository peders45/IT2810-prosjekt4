import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Header, Icon, Avatar } from 'react-native-elements'
import { searchForItem }  from "../../state/actions/searchActions";
import { connect } from 'react-redux'

//Input field and button for text search
const SearchField = ({ searchForItem }) => {
  const [ input, setInput ] = useState([]);
    
  return(
        <View style={styles.view}>
          <TextInput style={styles.text}
            placeholder="Search for menu items..."
            onChangeText={(text) => setInput(text)}
            returnKeyType='search'
            onSubmitEditing={() => searchForItem(input)}
          />
          {/* <Avatar 
            rounded icon={{ name: 'search', color: '#43484D', size: 30 }}
            size={'medium'}
            overlayContainerStyle={styles.iconContainer}
            color='#43484D'
            underlayColor='#f4dc22'
            onPress={() => searchForItem(input)} 
          /> */}
          <Icon containerStyle={styles.searchIcon}
              name='search'
              size={30}
              color='#43484D'
              underlayColor='#f4dc22'
              onPress={() => searchForItem(input)}
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
  view: {
    flexDirection: 'row',
  },
  text: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#FF6A6A',
    borderRadius: 4,
    padding: 6,
    margin: 8,
  },
  iconContainer: {
    backgroundColor: '#FF6A6A',
    marginTop: 5
  },
  searchIcon: {
    padding: 5,
    justifyContent: 'center',
  }
});