import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import ResultDetailSection from '../atoms/ResultDetailSection'
import ResultHeader from '../atoms/ResultHeader'
import { connect } from 'react-redux'
import { doPagination } from '../../state/actions/paginationAction'

const ResultSection = ({doPagination, menuItems, offset, count}) => {
  
    const [activeSections, setActiveSections] = useState([])

    const checkPagination = (isNext) =>{
      if(isNext && offset + 6 < count){
        console.log("next")
        doPagination(isNext)
      }else if(!isNext && offset - 6 >= 0){
        console.log("prev")
        doPagination(isNext)
      }
    }

    return (
      <View style={styles.ResultSection}>
        <Accordion
          sections={menuItems}
          activeSections={activeSections}
          renderHeader={ResultHeader}
          renderContent={ResultDetailSection}
          onChange={setActiveSections}
        /> 
        <View  style={styles.prevNext}>
          <TouchableOpacity onPress={() => checkPagination(false)} style={styles.button}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => checkPagination(true)} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <Text>{offset}-{offset+menuItems.length} of {count}</Text>
        </View>
    );
  
}

const mapDispatchToProps = {
  doPagination
 };

//Extract data from the store
const mapStateToProps = (state) => ({
  menuItems: state.menus,
  offset: state.offset,
  count: state.count,
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(ResultSection)


const styles = StyleSheet.create({
  ResultSection: {
    paddingTop: 20,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#ffe836',
    padding: 10,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    marginBottom: 7
  },
  buttonText: {
    color: '#43484D'
  },
  prevNext: {
    flexDirection:"row"
  }
});