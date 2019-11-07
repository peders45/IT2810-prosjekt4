//Reducer for entire site, simplifying store access
const reducer = (state = {
    searchWord: "",
  }, action) => {
  switch (action.type) {
    case "SEARCHWORD":
      return state = {
        ...state,
        searchWord: action.payload
      };
    default:
      return state;
  }
  };
  
  export default reducer;