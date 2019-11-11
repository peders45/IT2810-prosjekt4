import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import ResultDetailSection from '../atoms/ResultDetailSection'
import ResultHeader from '../atoms/ResultHeader'

const ResultSection = ({sections}) => {

    const [activeSections, setActiveSections] = useState([])

    return (
      <View style={styles.ResultSection}>
        <Accordion
          sections={sections}
          activeSections={activeSections}
          renderHeader={ResultHeader}
          renderContent={ResultDetailSection}
          onChange={setActiveSections}
        />
      </View>
    );
  
}

export default ResultSection;

const styles = StyleSheet.create({
  ResultSection: {
    paddingTop: 20,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',

  }
});