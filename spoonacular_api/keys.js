const spoonacular = {
  getRecipesByIngredientsURL: 'https://api.spoonacular.com/recipes/findByIngredients',
  getIngredientsURL: 'https://api.spoonacular.com/food/ingredients/search',
  getRecipeInformationURL: (id) => `https://api.spoonacular.com/recipes/${id}/information`,
  apiKey1: '67762614dc6a4bf19d81b6b2dd14ea69', 
  apiKey2: '78647f7485354dec813c53261e9429f4',
  apiKey3: 'eff7e27d7d794d769e4a06b810563ce7', // Brynn
  apiKey4: 'eb527cf585ea4f8f8e35d8b496da7862', // Alex
  apiKey5: '', // Cole
}

module.exports = spoonacular;