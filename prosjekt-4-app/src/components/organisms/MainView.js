import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import CategorySection from '../molecules/CategorySection';
import ResultSection from '../molecules/ResultSection'
import CustomHeader from '../molecules/CustomHeader';
import { connect } from 'react-redux'
import {searchForItem} from '../../state/actions/searchActions'

//Section for the main view including the side menu (MenuDrawer), the header and the searchresults
const MainView = ({drawerStatus, searchForItem}) => {

  useEffect(() => {searchForItem("StartupSequence")}, [searchForItem]);

    return(
      <View style={styles.mainView}>
        <MenuDrawer
          open={drawerStatus} 
          drawerContent={<CategorySection/>}
          drawerPercentage={65}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <CustomHeader/>
          <ResultSection/>
          {/* legg til resultsection etc her*/}
        </MenuDrawer>
      </View>
  );
}

const mapDispatchToProps = {
  searchForItem
 };

//Extract data from the store
const mapStateToProps = (state) => ({
    drawerStatus: state.drawerStatus,
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(MainView)

//Styling
const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: "#FF6A6A",
      alignItems: "center",
    }
});