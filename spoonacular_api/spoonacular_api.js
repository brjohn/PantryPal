const axios = require('axios');
const spoonacular = require('./keys');
const apiKeyToUse = spoonacular.apiKey1



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
  .then(payload => {
    console.log(payload.data.results)
    debugger
    printToFileFunction(payload.data.results)
  })

  .catch(err => console.log(err))




// 02. A function that gets recipes given ingredients
const getRecipeByIngredients = (ingredients) => axios.get(
  spoonacular.getRecipesByIngredientsURL,
  {
    params: { // params is the body parameters
      ingredients,
      apiKey: apiKeyToUse,
      number: 100, //100 is the maximum
    }

  })
  .then(payload => {
    console.log(payload.data[0])
    // we're gonna need to dispatch this through our reducers and middleware
  })

  .catch(err => console.log(err))



// 03. A function that gets information on a particular recipe
const getRecipeInformation = (id) => axios.get(
  spoonacular.getRecipeInformationURL(id),
  { params: {
    apiKey: apiKeyToUse,
  }}


).then(payload => {
  console.log(payload.data.extendedIngredients)
  // we're gonna need to dispatch this through our reducers and middleware
})

  .catch(err => console.log(err))


// getRecipeInformation(45641)


// Exporting 3 functions that were created
module.exports = {
  getIngredient,
  getRecipeByIngredients,
  getRecipeInformation
}


// getRecipeByIngredients('apple')
// getRecipeInformation(9003)
// getIngredient('apple')



