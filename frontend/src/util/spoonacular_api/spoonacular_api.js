const axios = require('axios');
const spoonacular = require('./keys');
// const apiKeyToUse = spoonacular["apiKey" + Math.floor((Math.random() * 4) + 1)] //uses random apiKey between 1 and 4
const apiKeyToUse = spoonacular.apiKey2


// 01. A function that gets ingredients
const getIngredient = (query, printToFileFunction) => axios.get(
  spoonacular.getIngredientsURL,
  {
    params: { // params is the body parameters
      query,
      apiKey: apiKeyToUse,
      number: 100 //100 is the maximum
    }

  })
  .then(payload => printToFileFunction(payload.data.results))
  .catch(err => console.log(err))




// 02. A function that gets recipes given ingredients
const getRecipeByIngredients = (ingredients, cbFunction, recipeCount = 100) => axios.get(
  spoonacular.getRecipesByIngredientsURL,
  {
    params: { // params is the body parameters
      ingredients,
      apiKey: apiKeyToUse,
      number: recipeCount, //100 is the maximum
    }

  })
  .then(payload => cbFunction(payload.data))
  .catch(err => console.log(err))



// 03. A function that gets information on a particular recipe
const getRecipeInformation = (id, cbFunction) => axios.get(
  spoonacular.getRecipeInformationURL(id),
  {
    params: {
      apiKey: apiKeyToUse,
    }
  })
  .then(payload => cbFunction(payload.data)) // we're gonna need to dispatch this through our reducers and middleware)
  .catch(err => console.log(err))


// 04. A function that gets information on multiple recipes
const getRecipeInformationBulk = (ids, cbFunction) => axios.get(
  spoonacular.getRecipeInformationBulkURL,
  {
    params: {
      apiKey: apiKeyToUse,
      ids
    }
  })
  .then(payload => cbFunction(payload.data)) // we're gonna need to dispatch this through our reducers and middleware)
  .catch(err => console.log(err))








// Exporting 3 functions that were created
module.exports = {
  getIngredient,
  getRecipeByIngredients,
  getRecipeInformation,
  getRecipeInformationBulk

}


// Below are sample commands you can run to see output, they are also located in search_results/
// getRecipeByIngredients('apple,blueberry', console.log)
// getRecipeInformation(9003, console.log)
// getIngredient('apple', console.log)
// getRecipeInformationBulk('661322,643857', console.log)




