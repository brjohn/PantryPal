const axios = require('axios');
const spoonacular = require('./keys');
const apiKeyToUse = spoonacular.apiKey3

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
    let ret = {};
    payload.data.results.forEach(el => {
      Object.assign(ret, {[el.id]: el.name})
    })

    printToFileFunction(ret)
  })

  .catch(err => console.log(err))

module.exports = getIngredient;









const getRecipebyIngredients = (ingredients) => axios.get(
  spoonacular.getRecipesByIngredientsURL,
  {
    params: { // params is the body parameters
      ingredients,
      // excludeIngredients,
      apiKey: apiKeyToUse,
      number: 100, //100 is the maximum
      // diet,
      // intolerances
    }

  })
  .then(payload => {
    console.log(payload.data)
    // we're gonna need to dispatch this through our reducers and middleware
  })

  .catch(err => console.log(err))



getRecipebyIngredients('apples,+flour,+sugar')
