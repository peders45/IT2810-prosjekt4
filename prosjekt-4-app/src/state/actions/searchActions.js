import client from '../../../setupApolloClient';
import store from '../../store';
import actionTypes from '../../actionTypes';
import queries from '../../../query';
import {AsyncStorage} from 'react-native';
import { setAutoFocusEnabled } from 'expo/build/AR';
 
//Actions for searching, as well as checking whether search was successful
export function searchForItem(searchWord) {
   const state = store.getState();
  //If empty, change categories array to include everything
  let categories = state.category
  if (categories.length === 0) {
    categories = ["Breakfast", "Beef_&_Pork", "Chicken_&_Fish", "Snacks_&_Sides", 
    "Salads", "Beverages", "Desserts", "Coffee_&_Tea", "Smoothies_&_Shakes"]
  } 

  return async function(dispatch) {
    dispatch({
      type: actionTypes.PAGINATION,
      payload: 0
    })

    dispatch({
      type: actionTypes.SEARCHWORD,
      payload: searchWord
    })

    dispatch({
      type: actionTypes.MENU_REQUESTED,
    })

    try{
      let data = null;

      if(searchWord == "StartupSequence"){
        const localData = await AsyncStorage.getItem('MclocalData');
        data = JSON.parse(localData);
      }else{
        const response = await client.query({
            query: queries.GET_MENU,
            variables: {
            first: state.first,
            offset:0,
            searchWord: searchWord,
            categories: categories, 
            sort: {
              sortCategory: state.sortCategory,
              isLowHigh: state.sortValue}       
            }
          })
          data = response.data.menu
      }


      
      if(!data.menus || data.menus.length < 1 && searchWord == "StartupSequence"){
        const response = await client.query({
          query: queries.GET_MENU,
          variables: {
          first: state.first,
          offset:0,
          searchWord: null,
          categories: categories, 
          sort: {
            sortCategory: state.sortCategory,
            isLowHigh: state.sortValue}       
          }
        })
        data = response.data.menu
      }

      dispatch({
        type: actionTypes.MENU_RECEIVED,
        payload: data
      })
      AsyncStorage.setItem('MclocalData', JSON.stringify(store.getState()));
    }catch(error){
      dispatch({
        type: actionTypes.MENU_FAILED,
        payload: error
      })
    }

  }
}