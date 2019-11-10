import React from 'react';
import { Header, Icon, Avatar } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import SearchField from '../atoms/SearchField'
import { connect } from 'react-redux'
import { toggleSideMenu }  from "../../state/actions/sideMenuActions";
import { searchForItem }  from "../../state/actions/searchActions";

//Header with searchfield, searchbutton and filter/sort button
const CustomHeader = ({ toggleSideMenu, drawerStatus, searchForItem, searchWord }) => {
    return(
      <View>
        <Header 
            containerStyle={styles.header} 
            centerContainerStyle={styles.searchfield} 
            leftContainerStyle={styles.sides} 
            rightContainerStyle={styles.sides} 
            placement={'right'}
            leftComponent={<Icon 
                name='menu'
                size={30}
                color='#43484D'
                underlayColor='#f4dc22'
                onPress={() => toggleSideMenu(!drawerStatus)}
            />}
            centerComponent={<SearchField/>}
            rightComponent={<Avatar 
                rounded icon={{ name: 'search', color: '#43484D', size: 30 }}
                size={'medium'}
                overlayContainerStyle={styles.iconContainer}
                color='#43484D'
                underlayColor='#f4dc22'
                onPress={() => searchForItem(searchWord)} 
            />}
          />
      </View>
  );
}

//Dispatching actions to the store
const mapDispatchToProps = {
    searchForItem,
    toggleSideMenu
};

//Extract data from the store
const mapStateToProps = (state) => ({
    searchWord: state.searchWord,
    drawerStatus: state.drawerStatus
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader)

//Styling
const styles = StyleSheet.create({
    header: {
      borderBottomColor: "#FF6A6A",
      backgroundColor: "#ffe836",
      marginTop:-5,
    },
    searchfield: {
      paddingRight:10
    },
    sides: {
      padding: 5,
    },
    iconContainer: {
        backgroundColor: '#FF6A6A'
    }
});