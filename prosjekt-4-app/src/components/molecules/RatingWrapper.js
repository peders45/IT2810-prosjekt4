import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { connect } from 'react-redux'
import {rateMenu} from '../../state/actions/ratingActions'
import {saveFavourite} from '../../state/actions/favouritesActions'

//Rating functionality for each menu item, imported from 'react-native-elements'.
//Rating out of five stars, added to database.
  const RatingWrapper = ({ rateMenu, menuId, saveFavourite }) => {

    const setRating = (value) =>{
      rateMenu(value, menuId)
    }

    return (
      <View style={styles.rating}>
        <Text>Your Rating: </Text>
        <AirbnbRating
        count={5}
        showRating={false}
        onFinishRating={setRating}
        defaultRating={0}
        size={15}
        selectedColor="#000000"
        />
        <TouchableOpacity onPress={() => saveFavourite(menuId)} style={styles.button}>
          <Text style={styles.buttonText}>Add to favourites</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const mapDispatchToProps = {
    rateMenu,
    saveFavourite
   };

export default connect(null, mapDispatchToProps)(RatingWrapper)

const styles = StyleSheet.create({
    rating:{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        marginRight: 10,
    },
    button: {
      backgroundColor: '#FF6A6A',
      padding: 10,
      alignItems: 'center',
      borderRadius: 4,
      marginTop: 10,
    },
    buttonText: {
      color: '#43484D'
    },
});