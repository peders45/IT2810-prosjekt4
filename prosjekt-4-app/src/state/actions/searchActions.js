import actionTypes from '../../actionTypes';

//Actions for searching, as well as checking whether search was successful
export function searchForItem(searchWord) {
  return {
      type: actionTypes.SEARCHWORD,
      payload: searchWord
  }
}