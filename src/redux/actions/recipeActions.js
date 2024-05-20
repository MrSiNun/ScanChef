import axios from 'axios';

export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  payload: recipes,
});

export const selectRecipe = (recipe) => ({
  type: 'SELECT_RECIPE',
  payload: recipe,
});

export const fetchRecipes = (ingredients) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.recipes.com/search?ingredients=${ingredients}`);
    dispatch(setRecipes(response.data));
  } catch (error) {
    console.error(error);
  }
};
