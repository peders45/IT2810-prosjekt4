import React, {useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { Text, View } from 'react-native';

  const _renderHeader = section => {
    return (
      <View >
        <Text>{section.Item}</Text>
      </View>
    );
  };

  const _renderContent = section => {
    return (
      <View>
        <Text>Category: {section.Category}</Text>
        <Text>Calories: {section.Calories}</Text>
        <Text>Carbohydrates: {section.Carbohydrates}</Text>
        <Text>Protein: {section.Protein}</Text>
        <Text>Total fat: {section.Total_Fat}</Text>
        <Text>Saturated fat: {section.Saturated_Fat}</Text>
        <Text>Saturated fat {section.Saturated_Fat}</Text>
        <Text>Sugars: {section.Sugars}</Text>
      </View>
    );
  };

const ResultSection = ({sections}) => {

    const [activeSections, setActiveSections] = useState([])

    return (
      <Accordion
        sections={sections}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={setActiveSections}
      />
    );
  
}

export default ResultSection;

