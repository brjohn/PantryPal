const axios = require('axios');
const spoonacular = require('./keys');
const apiKeyToUse = spoonacular.apiKey3


// A function that gets ingredients
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




// A function that gets recipes given ingredients
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



// A function that gets information on a particular recipe
const getRecipeInformation = (id) => axios.get(
  spoonacular.getRecipeInformationURL(id),
  { params: {
    apiKey: apiKeyToUse,
  }}


).then(payload => {
  console.log(payload)
  // we're gonna need to dispatch this through our reducers and middleware
})

  .catch(err => console.log(err))



// getRecipeInformation(547425)




