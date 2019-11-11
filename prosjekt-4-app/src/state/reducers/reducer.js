//Reducer for entire site, simplifying store access
const reducer = (state = {
    drawerStatus: false,
    searchWord: "",
    menus: [
      {
        _id: '5d9c9344073574a3f332d4a4',
        Item: '1percentage_Low_Fat_Milk_Jug',
        Category: 'Beverages',
        score: 3.9545454545454546,
        Calories: 100,
        Carbohydrates: 12,
        Protein: 8,
        Total_Fat: 2.5,
        Saturated_Fat: 1.5,
        Sugars: 12,
        Total_Fat_percentage_Daily_Value: 4,
        Cholesterol_percentage_Daily_Value: 3,
        Sodium_percentage_Daily_Value: 5,
        Calcium_percentage_Daily_Value: 30,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d422',
        Item: 'Egg_McMuffin',
        Category: 'Breakfast',
        score: 2.6206896551724137,
        Calories: 300,
        Carbohydrates: 31,
        Protein: 17,
        Total_Fat: 13,
        Saturated_Fat: 5,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 20,
        Cholesterol_percentage_Daily_Value: 87,
        Sodium_percentage_Daily_Value: 31,
        Calcium_percentage_Daily_Value: 25,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d424',
        Item: 'Sausage_McMuffin',
        Category: 'Breakfast',
        score: 3,
        Calories: 370,
        Carbohydrates: 29,
        Protein: 14,
        Total_Fat: 23,
        Saturated_Fat: 8,
        Sugars: 2,
        Total_Fat_percentage_Daily_Value: 35,
        Cholesterol_percentage_Daily_Value: 15,
        Sodium_percentage_Daily_Value: 33,
        Calcium_percentage_Daily_Value: 25,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d425',
        Item: 'Sausage_McMuffin_with_Egg',
        Category: 'Breakfast',
        score: 3.391304347826087,
        Calories: 450,
        Carbohydrates: 30,
        Protein: 21,
        Total_Fat: 28,
        Saturated_Fat: 10,
        Sugars: 2,
        Total_Fat_percentage_Daily_Value: 43,
        Cholesterol_percentage_Daily_Value: 95,
        Sodium_percentage_Daily_Value: 36,
        Calcium_percentage_Daily_Value: 30,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d426',
        Item: 'Sausage_McMuffin_with_Egg_Whites',
        Category: 'Breakfast',
        score: 4,
        Calories: 400,
        Carbohydrates: 30,
        Protein: 21,
        Total_Fat: 23,
        Saturated_Fat: 8,
        Sugars: 2,
        Total_Fat_percentage_Daily_Value: 35,
        Cholesterol_percentage_Daily_Value: 16,
        Sodium_percentage_Daily_Value: 37,
        Calcium_percentage_Daily_Value: 25,
        __typename: 'Menu'
      },
      {
        _id: '5d9c9344073574a3f332d427',
        Item: 'Steak_&_Egg_McMuffin',
        Category: 'Breakfast',
        score: 5,
        Calories: 430,
        Carbohydrates: 31,
        Protein: 26,
        Total_Fat: 23,
        Saturated_Fat: 9,
        Sugars: 3,
        Total_Fat_percentage_Daily_Value: 36,
        Cholesterol_percentage_Daily_Value: 100,
        Sodium_percentage_Daily_Value: 40,
        Calcium_percentage_Daily_Value: 30,
        __typename: 'Menu'
      },
      // {
      //   _id: '5d9c9344073574a3f332d428',
      //   Item: '"Bacon',
      //   Category: 'Breakfast',
      //   score: 3.7,
      //   Calories: 150,
      //   Carbohydrates: 54,
      //   Protein: 3,
      //   Total_Fat: 230,
      //   Saturated_Fat: 40,
      //   Sugars: 7,
      //   Total_Fat_percentage_Daily_Value: 26,
      //   Cholesterol_percentage_Daily_Value: 250,
      //   Sodium_percentage_Daily_Value: 1300,
      //   Calcium_percentage_Daily_Value: 8,
      //   __typename: 'Menu'
      // },
      // {
      //   _id: '5d9c9344073574a3f332d429',
      //   Item: '"Bacon',
      //   Category: 'Breakfast',
      //   score: 2.962962962962963,
      //   Calories: 164,
      //   Carbohydrates: 59,
      //   Protein: 4,
      //   Total_Fat: 270,
      //   Saturated_Fat: 47,
      //   Sugars: 12,
      //   Total_Fat_percentage_Daily_Value: 30,
      //   Cholesterol_percentage_Daily_Value: 250,
      //   Sodium_percentage_Daily_Value: 1410,
      //   Calcium_percentage_Daily_Value: 8,
      //   __typename: 'Menu'
      // },
      // {
      //   _id: '5d9c9344073574a3f332d42a',
      //   Item: '"Bacon',
      //   Category: 'Breakfast',
      //   score: 2.9375,
      //   Calories: 153,
      //   Carbohydrates: 54,
      //   Protein: 3,
      //   Total_Fat: 180,
      //   Saturated_Fat: 32,
      //   Sugars: 7,
      //   Total_Fat_percentage_Daily_Value: 20,
      //   Cholesterol_percentage_Daily_Value: 35,
      //   Sodium_percentage_Daily_Value: 1300,
      //   Calcium_percentage_Daily_Value: 8,
      //   __typename: 'Menu'
      // }
    ],
    category: [],
    sortCategory: "",
    sortValue: null,
    status: "",
    first: 6,
    offset: 0,
    count:0,
    error: []
  }, action) => {
  switch (action.type) {
    case "SIDEMENU":
      return state = {
        ...state,
        drawerStatus: action.payload
      };
    case "PAGINATION":
      return state = {
        ...state,
        offset: action.payload
      };
    case "SEARCHWORD":
      return state = {
        ...state,
        searchWord: action.payload
      };
    case "MENU_REQUESTED":
      return state = {
        ...state,
        status: "menu waiting"
      };
    case "MENU_RECEIVED":
      return state = {
        ...state,
        menus: action.payload.data.menu.menus,
        count: action.payload.data.menu.count,
        status: "menu received"
      };
    case "MENU_FAILED":
      return state = {
        ...state,
        error: action.payload,
        status: "menu failed"
      };
    case "RATING_REQUESTED":
      return state = {
        ...state,
        status: "rating waiting"
      };
    case "RATING_RECEIVED":
      return state = {
        ...state,
        menus: action.payload,
        status: "rating received"
      };
    case "RATING_FAILED":
      return state = {
        ...state,
        error: action.payload,
        status: "rating failed"
      };
    case "CATEGORY_CHECK":
      return state = {
        ...state,
        category: [...state.category, action.payload]
      };
    case "CATEGORY_UNCHECK":
      const newCategories = state.category.filter(category => category !== action.payload);
      return state = {
        ...state,
        category: newCategories
      };
    case "SORT":
      return state = {
        ...state,
        sortCategory: action.payload.sortCategory,
        sortValue: action.payload.sortValue
      };
    default:
      return state;
  }
  };
  
  export default reducer;
  