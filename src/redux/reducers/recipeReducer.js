const initialState = {
  recipes: [],
  selectedRecipe: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {...state, recipes: action.payload};
    case 'SELECT_RECIPE':
      return {...state, selectedRecipe: action.payload};
    default:
      return state;
  }
};

export default recipeReducer;
