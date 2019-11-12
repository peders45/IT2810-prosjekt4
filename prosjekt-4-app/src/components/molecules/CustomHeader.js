import React from 'react';
import { Header, Icon } from 'react-native-elements'
import { View, StyleSheet, Keyboard } from 'react-native'
import SearchField from '../atoms/SearchField'
import { connect } from 'react-redux'
import { toggleSideMenu }  from "../../state/actions/sideMenuActions";

//Header with searchfield, searchbutton and filter/sort button
const CustomHeader = ({ toggleSideMenu, drawerStatus }) => {
    const handleToggle = () => {
      Keyboard.dismiss()
      toggleSideMenu(!drawerStatus)
    };

    return(
      <View>
        <Header 
            containerStyle={styles.header} 
            leftContainerStyle={styles.menuIcon} 
            placement={'right'}
            leftComponent={<Icon 
                name='menu'
                size={30}
                color='#43484D'
                underlayColor='#f4dc22'
                onPress={() => handleToggle()}
            />}
            rightComponent={<SearchField/>}
          />
      </View>
  );
}

//Dispatching actions to the store
const mapDispatchToProps = {
    toggleSideMenu
};

//Extract data from the store
const mapStateToProps = (state) => ({
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
    menuIcon: {
      padding: 5,
    },
});